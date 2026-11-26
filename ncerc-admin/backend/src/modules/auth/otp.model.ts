import crypto from 'crypto';
import { Schema, model } from 'mongoose';
import { env } from '../../config/env';
import { ApiError } from '../../utils/ApiError';

/**
 * OTP model (MongoDB, collection "otps").
 *
 * One short-lived document per (scope, email). It holds BOTH the pending signup data and the live code:
 *
 *   pending              name, phone?, passwordHash   what the account will be created from
 *   pendingExpiresAt     now + 30 min                 so "Resend" still works after the 2-minute code expires
 *   codeHash             HMAC of the 6-digit code     the plain code is never stored
 *   codeExpiresAt        now + OTP_TTL_SECONDS        the 2-minute window, checked in code (exact to the second)
 *   attempts             wrong-guess counter          locked after OTP_MAX_ATTEMPTS
 *   cooldownUntil        resend not allowed before    OTP_RESEND_COOLDOWN_SECONDS
 *   sendsCount/WindowEnd hourly cap                   OTP_MAX_SENDS_PER_HOUR
 *   purgeAt              now + 1 h                    TTL index deletes the whole document
 *
 * IMPORTANT: MongoDB's TTL cleanup only runs about once a minute, so it is used for housekeeping only.
 * Every expiry above is compared against the clock in code, so a code dies at exactly 2:00.
 *
 * Scopes keep flows apart: an admin self-signup and a super-admin creation for the same e-mail never
 * share codes or counters.
 *   'signup'       -> admin self-signup
 *   'super-admin'  -> a super admin creating another super admin
 *   'password-reset' -> forgot password (only name is stored; there is no new account data)
 */

export type OtpScope = 'signup' | 'super-admin' | 'password-reset';

export interface PendingSignup {
  name: string;
  phone?: string;
  /** present for 'signup' and 'super-admin'; absent for 'password-reset' */
  passwordHash?: string;
}

interface IOtp {
  scope: OtpScope;
  email: string;
  pending: PendingSignup;
  pendingExpiresAt: Date;
  codeHash: string | null;
  codeExpiresAt: Date | null;
  attempts: number;
  cooldownUntil: Date | null;
  sendsCount: number;
  sendsWindowEndsAt: Date | null;
  purgeAt: Date;
}

const otpSchema = new Schema<IOtp>(
  {
    scope: { type: String, enum: ['signup', 'super-admin', 'password-reset'], required: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    pending: {
      name: { type: String, required: true },
      phone: { type: String },
      passwordHash: { type: String },
    },
    pendingExpiresAt: { type: Date, required: true },
    codeHash: { type: String, default: null },
    codeExpiresAt: { type: Date, default: null },
    attempts: { type: Number, default: 0 },
    cooldownUntil: { type: Date, default: null },
    sendsCount: { type: Number, default: 0 },
    sendsWindowEndsAt: { type: Date, default: null },
    purgeAt: { type: Date, required: true },
  },
  { timestamps: true },
);

otpSchema.index({ scope: 1, email: 1 }, { unique: true });
otpSchema.index({ purgeAt: 1 }, { expireAfterSeconds: 0 }); // housekeeping only (runs ~every 60 s)

export const Otp = model<IOtp>('Otp', otpSchema);

const PENDING_TTL_MS = 30 * 60 * 1000;
const RECORD_TTL_MS = 60 * 60 * 1000;
const HOUR_MS = 60 * 60 * 1000;

const inFuture = (ms: number, from = Date.now()) => new Date(from + ms);

/** Any database failure becomes a clean 503 instead of leaking internals. */
const guard = async <T>(fn: () => Promise<T>): Promise<T> => {
  try {
    return await fn();
  } catch (err) {
    if (err instanceof ApiError) throw err;
    console.error('OTP storage operation failed:', (err as Error).message);
    throw new ApiError(503, 'Verification service is temporarily unavailable. Please try again shortly.');
  }
};

/** Only an HMAC of the code is stored, so reading the database does not reveal a live code. */
const hashOtp = (scope: OtpScope, email: string, code: string): string =>
  crypto.createHmac('sha256', env.JWT_ACCESS_SECRET).update(`${scope}:${email}:${code}`).digest('hex');

const safeEqual = (a: string, b: string): boolean => {
  const x = Buffer.from(a, 'hex');
  const y = Buffer.from(b, 'hex');
  return x.length === y.length && crypto.timingSafeEqual(x, y);
};

export const generateOtp = (): string =>
  crypto.randomInt(0, 10 ** env.OTP_LENGTH).toString().padStart(env.OTP_LENGTH, '0');

const sessionExpired = () =>
  new ApiError(400, 'Your verification session has expired. Please start again.', { code: 'SIGNUP_EXPIRED' });

// ---------- pending signup ----------
/**
 * Stores (or replaces) the pending signup. Replacing it also kills any live code, so a code that was
 * e-mailed for the OLD details can never create an account from the NEW details.
 */
export const savePendingSignup = (email: string, data: PendingSignup, scope: OtpScope = 'signup') =>
  guard(async () => {
    const pending: PendingSignup = {
      name: data.name,
      ...(data.passwordHash ? { passwordHash: data.passwordHash } : {}),
      ...(data.phone ? { phone: data.phone } : {}),
    };
    await Otp.findOneAndUpdate(
      { scope, email },
      {
        $set: {
          pending,
          pendingExpiresAt: inFuture(PENDING_TTL_MS),
          purgeAt: inFuture(RECORD_TTL_MS),
          codeHash: null,
          codeExpiresAt: null,
          attempts: 0,
        },
        $setOnInsert: { sendsCount: 0 }, // existing counters and cooldown are kept on purpose
      },
      { upsert: true },
    );
  });

export const getPendingSignup = (email: string, scope: OtpScope = 'signup') =>
  guard(async (): Promise<PendingSignup | null> => {
    const doc = await Otp.findOne({ scope, email, pendingExpiresAt: { $gt: new Date() } });
    return doc ? doc.pending : null;
  });

export const extendPendingSignup = (email: string, scope: OtpScope = 'signup') =>
  guard(async () => {
    await Otp.updateOne(
      { scope, email, pendingExpiresAt: { $gt: new Date() } },
      { $set: { pendingExpiresAt: inFuture(PENDING_TTL_MS), purgeAt: inFuture(RECORD_TTL_MS) } },
    );
  });

// ---------- issue ----------
/** Applies the resend cooldown and the hourly cap, then stores a fresh code. Returns the plain code to e-mail. */
export const issueOtp = (email: string, scope: OtpScope = 'signup') =>
  guard(async (): Promise<string> => {
    const now = new Date();
    const doc = await Otp.findOne({ scope, email, pendingExpiresAt: { $gt: now } });
    if (!doc) throw sessionExpired();

    if (doc.cooldownUntil && doc.cooldownUntil > now) {
      const wait = Math.ceil((doc.cooldownUntil.getTime() - now.getTime()) / 1000);
      throw new ApiError(429, `Please wait ${wait} seconds before requesting another code`, {
        code: 'OTP_COOLDOWN',
        retryAfterSeconds: wait,
      });
    }

    const windowActive = Boolean(doc.sendsWindowEndsAt && doc.sendsWindowEndsAt > now);
    if (windowActive && doc.sendsCount >= env.OTP_MAX_SENDS_PER_HOUR) {
      throw new ApiError(429, 'Too many codes requested. Please try again in an hour.', { code: 'OTP_SEND_LIMIT' });
    }

    const code = generateOtp();

    // Compare-and-swap: if two requests race, only one still matches these two fields and wins.
    const updated = await Otp.findOneAndUpdate(
      { _id: doc._id, sendsCount: doc.sendsCount, cooldownUntil: doc.cooldownUntil ?? null },
      {
        $set: {
          codeHash: hashOtp(scope, email, code),
          codeExpiresAt: inFuture(env.OTP_TTL_SECONDS * 1000, now.getTime()),
          attempts: 0,
          cooldownUntil: env.OTP_RESEND_COOLDOWN_SECONDS > 0 ? inFuture(env.OTP_RESEND_COOLDOWN_SECONDS * 1000, now.getTime()) : null,
          sendsCount: windowActive ? doc.sendsCount + 1 : 1,
          sendsWindowEndsAt: windowActive ? doc.sendsWindowEndsAt : inFuture(HOUR_MS, now.getTime()),
          purgeAt: inFuture(RECORD_TTL_MS, now.getTime()),
        },
      },
    );
    if (!updated) {
      throw new ApiError(429, 'A code was just requested. Please wait a moment.', { code: 'OTP_COOLDOWN', retryAfterSeconds: 1 });
    }
    return code;
  });

// ---------- verify ----------
/** Resolves when the code is correct (and burns it). Throws a descriptive ApiError otherwise. */
export const consumeOtp = (email: string, code: string, scope: OtpScope = 'signup') =>
  guard(async (): Promise<void> => {
    // Counting the attempt and checking "is there a live, unexpired code" is ONE atomic operation.
    const doc = await Otp.findOneAndUpdate(
      { scope, email, codeHash: { $ne: null }, codeExpiresAt: { $gt: new Date() } },
      { $inc: { attempts: 1 } },
      { new: true },
    );
    if (!doc || !doc.codeHash) {
      throw new ApiError(400, 'This code has expired. Please request a new one.', { code: 'OTP_EXPIRED' });
    }

    if (doc.attempts > env.OTP_MAX_ATTEMPTS) {
      await Otp.updateOne({ _id: doc._id }, { $set: { codeHash: null, codeExpiresAt: null } });
      throw new ApiError(429, 'Too many wrong attempts. Please request a new code.', { code: 'OTP_ATTEMPTS_EXCEEDED' });
    }

    if (!safeEqual(doc.codeHash, hashOtp(scope, email, code))) {
      throw new ApiError(400, 'Incorrect code. Please try again.', {
        code: 'OTP_INVALID',
        attemptsLeft: Math.max(0, env.OTP_MAX_ATTEMPTS - doc.attempts),
      });
    }

    // Burn the code. Only one of two simultaneous correct submissions can win this update.
    const burned = await Otp.findOneAndUpdate(
      { _id: doc._id, codeHash: doc.codeHash },
      { $set: { codeHash: null, codeExpiresAt: null } },
    );
    if (!burned) throw new ApiError(400, 'This code has expired. Please request a new one.', { code: 'OTP_EXPIRED' });
  });

// ---------- cleanup ----------
/** Removes the live code (e.g. when the e-mail could not be sent) and lets the user retry immediately. */
export const revokeOtp = (email: string, scope: OtpScope = 'signup') =>
  guard(async () => {
    await Otp.updateOne({ scope, email }, { $set: { codeHash: null, codeExpiresAt: null, cooldownUntil: null } });
  });

/** After a successful signup: remove the pending data and everything that belongs to it. */
export const clearSignup = (email: string, scope: OtpScope = 'signup') =>
  guard(async () => {
    await Otp.deleteOne({ scope, email });
  });
