import { deleteImage, uploadImageBuffer } from '../../config/cloudinary';
import { cloudinaryEnabled, env } from '../../config/env';
import { isMailConfigured, otpEmail, sendMail } from '../../config/mail';
import { Role, ROLES, USER_STATUS } from '../../constants/roles';
import { ApiError } from '../../utils/ApiError';
import { canChangeOwnPassword } from '../../utils/accountPolicy';
import { signAccessToken } from '../../utils/jwt';
import { log, maskEmail } from '../../utils/logger';
import { comparePassword, DUMMY_HASH, hashPassword } from '../../utils/password';
import { generateToken, hashToken } from '../../utils/token';
import { recordPasswordChange } from '../users/passwordAudit.model';
import { IUser, User } from '../users/user.model';
import {
  OtpScope,
  clearSignup,
  consumeOtp,
  extendPendingSignup,
  getPendingSignup,
  issueOtp,
  revokeOtp,
  savePendingSignup,
} from './otp.model';
import { Session } from './session.model';

const SCOPE = 'auth';
/** Square, face-centred 512px picture. Cloudinary does the crop, so any photo shape works. */
const AVATAR_TRANSFORMATION = { width: 512, height: 512, crop: 'fill', gravity: 'face', quality: 'auto', fetch_format: 'auto' };

export interface ClientMeta {
  userAgent?: string;
  ip?: string;
}

const refreshExpiry = () => new Date(Date.now() + env.REFRESH_TOKEN_TTL_DAYS * 24 * 60 * 60 * 1000);

/** Creates a session and returns the tokens. Used by login and by the social callbacks. */
export const startSession = async (userId: string, role: Role, meta: ClientMeta) => {
  try {
    const refreshToken = generateToken();
    const session = await Session.create({
      userId,
      refreshTokenHash: hashToken(refreshToken),
      expiresAt: refreshExpiry(),
      userAgent: meta.userAgent,
      ip: meta.ip,
    });
    const accessToken = signAccessToken({ sub: userId, role, sid: session.id });
    await User.updateOne({ _id: userId }, { lastLoginAt: new Date() });
    return { accessToken, refreshToken };
  } catch (err) {
    log.failure(SCOPE, 'startSession', err);
    throw err;
  }
};

const assertCanLogin = (status: string) => {
  if (status === USER_STATUS.PENDING)
    throw new ApiError(403, 'Your account is waiting for approval by the super admin', { code: 'PENDING_APPROVAL' });
  if (status === USER_STATUS.SUSPENDED)
    throw new ApiError(403, 'Your account has been suspended', { code: 'SUSPENDED' });
};

/** What the frontend needs to draw its countdown and enable the "Resend" button. */
export const otpInfo = (email: string) => {
  const now = Date.now();
  return {
    email,
    expiresInSeconds: env.OTP_TTL_SECONDS,
    resendAfterSeconds: env.OTP_RESEND_COOLDOWN_SECONDS,
    expiresAt: new Date(now + env.OTP_TTL_SECONDS * 1000).toISOString(),
    resendAvailableAt: new Date(now + env.OTP_RESEND_COOLDOWN_SECONDS * 1000).toISOString(),
  };
};

export const sessionExpired = () =>
  new ApiError(400, 'Your verification session has expired. Please start again.', { code: 'SIGNUP_EXPIRED' });

const scopeLabel = (scope: OtpScope) =>
  scope === 'super-admin' ? 'super admin creation' : scope === 'password-reset' ? 'password reset' : 'admin signup';

// ======================= OTP =======================
/** Creates a fresh code and e-mails it. Needs a pending record (see otp.model.ts) for this scope. */
export const sendOtp = async (email: string, scope: OtpScope = 'signup') => {
  try {
    const pending = await getPendingSignup(email, scope);
    if (!pending) throw sessionExpired();

    const code = await issueOtp(email, scope); // enforces resend cooldown + hourly cap
    const purpose = scope === 'super-admin' ? 'super_admin' : scope === 'password-reset' ? 'password_reset' : 'signup';
    try {
      await sendMail({ to: email, ...otpEmail(pending.name, code, purpose), devPreview: `OTP for ${email}: ${code}` });
    } catch (mailErr) {
      log.error('mail', `Could not send OTP e-mail to ${maskEmail(email)}: ${(mailErr as Error).message}`);
      await revokeOtp(email, scope); // let the user retry immediately
      throw new ApiError(502, 'We could not send the verification email. Please try again.', { code: 'EMAIL_SEND_FAILED' });
    }

    log.success(
      SCOPE,
      `OTP ${isMailConfigured ? 'e-mailed' : 'generated (mail not configured, see console preview)'} to ${maskEmail(email)} for ${scopeLabel(scope)}; valid ${env.OTP_TTL_SECONDS}s`,
    );
    return otpInfo(email);
  } catch (err) {
    log.failure(SCOPE, 'sendOtp', err);
    throw err;
  }
};

/** Works after the code has expired (2 minutes) as long as the pending record is still there (30 minutes). */
export const resendOtp = async (email: string, scope: OtpScope = 'signup') => {
  try {
    if (!(await getPendingSignup(email, scope))) throw sessionExpired();
    await extendPendingSignup(email, scope);
    return await sendOtp(email, scope);
  } catch (err) {
    log.failure(SCOPE, 'resendOtp', err);
    throw err;
  }
};

/**
 * Step 1 of admin self-signup. NO account is created yet: name, phone and password hash wait in the
 * temporary OTP collection until the e-mail is verified. Unverified signups never exist in the users
 * collection and can never log in.
 */
export const signup = async (input: { name: string; email: string; phone?: string; password: string }) => {
  try {
    if (await User.exists({ email: input.email })) throw new ApiError(409, 'An account with this email already exists');

    await savePendingSignup(input.email, {
      name: input.name,
      phone: input.phone,
      passwordHash: await hashPassword(input.password),
    });
    log.info(SCOPE, `Signup started for ${maskEmail(input.email)}`);
    return await sendOtp(input.email);
  } catch (err) {
    log.failure(SCOPE, 'signup', err);
    throw err;
  }
};

/** Step 2 of admin self-signup. A correct code creates the account. */
export const verifyOtp = async (email: string, otp: string) => {
  try {
    const pending = await getPendingSignup(email);
    if (!pending || !pending.passwordHash) throw sessionExpired();

    await consumeOtp(email, otp); // throws on wrong / expired / too many attempts

    if (await User.exists({ email })) {
      await clearSignup(email);
      throw new ApiError(409, 'An account with this email already exists');
    }

    // self-signup is never a super admin. By default the super admin must still approve it.
    const status = env.SIGNUP_REQUIRES_APPROVAL ? USER_STATUS.PENDING : USER_STATUS.ACTIVE;
    await User.create({
      name: pending.name,
      email,
      phone: pending.phone,
      passwordHash: pending.passwordHash,
      role: ROLES.ADMIN,
      status,
    });
    await clearSignup(email);

    log.success(SCOPE, `Email verified, account created: ${maskEmail(email)} (role: admin, status: ${status})`);
    return { status };
  } catch (err) {
    log.failure(SCOPE, 'verifyOtp', err);
    throw err;
  }
};

// ======================= login / session =======================
export const login = async (input: { email: string; password: string }, meta: ClientMeta) => {
  try {
    const user = await User.findOne({ email: input.email }).select('+passwordHash');

    // always run a bcrypt compare so response time does not reveal whether the email exists
    const valid = await comparePassword(input.password, user?.passwordHash ?? DUMMY_HASH);
    if (!user || !user.passwordHash || !valid) throw new ApiError(401, 'Invalid email or password');

    assertCanLogin(user.status);

    const tokens = await startSession(user.id, user.role, meta);
    log.success(SCOPE, `Login successful: ${maskEmail(user.email)} (role: ${user.role})`);
    return { user, ...tokens };
  } catch (err) {
    log.failure(SCOPE, 'login', err);
    throw err;
  }
};

export const refresh = async (refreshToken: string | undefined) => {
  try {
    if (!refreshToken) throw new ApiError(401, 'No refresh token');

    const session = await Session.findOne({ refreshTokenHash: hashToken(refreshToken) });
    if (!session || session.expiresAt < new Date()) throw new ApiError(401, 'Session expired, please log in again');

    const user = await User.findById(session.userId);
    if (!user || user.status !== USER_STATUS.ACTIVE) {
      await session.deleteOne();
      throw new ApiError(401, 'Session expired, please log in again');
    }

    // rotate: the old refresh token stops working immediately
    const newRefreshToken = generateToken();
    session.refreshTokenHash = hashToken(newRefreshToken);
    session.expiresAt = refreshExpiry();
    session.lastUsedAt = new Date();
    await session.save();

    const accessToken = signAccessToken({ sub: user.id, role: user.role, sid: session.id });
    return { user, accessToken, refreshToken: newRefreshToken };
  } catch (err) {
    log.failure(SCOPE, 'refresh', err);
    throw err;
  }
};

export const logout = async (refreshToken: string | undefined) => {
  try {
    if (!refreshToken) return;
    const result = await Session.deleteOne({ refreshTokenHash: hashToken(refreshToken) });
    if (result.deletedCount) log.info(SCOPE, 'Logout: session closed');
  } catch (err) {
    log.failure(SCOPE, 'logout', err);
    throw err;
  }
};

// ======================= password reset (forgot -> verify OTP -> new password) =======================
// Works for super admins AND admins, and ONLY ever for the account that owns the e-mail address:
// the code goes to that inbox, so nobody can reset somebody else's password this way
// (including the root super admin's).
const RESET_SCOPE = 'password-reset' as const;
const RESET_TOKEN_TTL_MS = 10 * 60 * 1000;

/** Step 1. Always answers the same way, so nobody can find out which e-mails are registered. */
export const forgotPassword = async (email: string) => {
  try {
    const user = await User.findOne({ email });
    if (!user || user.status !== USER_STATUS.ACTIVE) {
      log.info(SCOPE, `Password reset requested for ${maskEmail(email)}: no active account, nothing sent`);
      return otpInfo(email);
    }

    // a repeat request behaves like "resend": keep the record, issue a new code
    if (await getPendingSignup(email, RESET_SCOPE)) await extendPendingSignup(email, RESET_SCOPE);
    else await savePendingSignup(email, { name: user.name }, RESET_SCOPE);

    try {
      await sendOtp(email, RESET_SCOPE);
    } catch (err) {
      // cooldown, hourly cap or mail failure: already logged by sendOtp. Answer like a success, otherwise
      // the status code would reveal that this e-mail has an account.
      if (!(err instanceof ApiError) || ![429, 502].includes(err.statusCode)) throw err;
    }
    return otpInfo(email);
  } catch (err) {
    log.failure(SCOPE, 'forgotPassword', err);
    throw err;
  }
};

/** Step 2. A correct code returns a short-lived, single-use reset token. */
export const verifyResetOtp = async (email: string, otp: string) => {
  try {
    // wrong / expired / too many attempts -> ApiError. An unknown e-mail simply looks "expired".
    await consumeOtp(email, otp, RESET_SCOPE);

    const user = await User.findOne({ email });
    if (!user || user.status !== USER_STATUS.ACTIVE) {
      throw new ApiError(400, 'This code has expired. Please request a new one.', { code: 'OTP_EXPIRED' });
    }

    const token = generateToken(32);
    user.passwordResetTokenHash = hashToken(token); // only the hash is stored
    user.passwordResetExpires = new Date(Date.now() + RESET_TOKEN_TTL_MS);
    await user.save();
    await clearSignup(email, RESET_SCOPE);

    log.success(SCOPE, `Reset code verified for ${maskEmail(email)}; reset token valid ${RESET_TOKEN_TTL_MS / 60000} min`);
    return { resetToken: token, expiresInSeconds: RESET_TOKEN_TTL_MS / 1000 };
  } catch (err) {
    log.failure(SCOPE, 'verifyResetOtp', err);
    throw err;
  }
};

/** Step 3. Sets the new password. The token is single-use and every session of the account is revoked. */
export const resetPassword = async (token: string, newPassword: string, meta: ClientMeta = {}) => {
  try {
    const user = await User.findOne({
      passwordResetTokenHash: hashToken(token),
      passwordResetExpires: { $gt: new Date() },
      status: USER_STATUS.ACTIVE,
    }).select('+passwordResetTokenHash +passwordResetExpires');
    if (!user) throw new ApiError(400, 'Reset link is invalid or has expired');

    user.passwordHash = await hashPassword(newPassword);
    user.passwordChangedAt = new Date();
    user.superAdminId = null; // the owner chose this password themselves
    user.passwordResetTokenHash = undefined;
    user.passwordResetExpires = undefined;
    await user.save();

    // log the user out everywhere
    await Session.deleteMany({ userId: user.id });
    const owner = { id: String(user._id), email: user.email };
    await recordPasswordChange({ target: { ...owner, role: user.role }, changedBy: owner, method: 'forgot_reset', ...meta });
    log.success(SCOPE, `Password reset completed for ${maskEmail(user.email)}; all sessions revoked`);
  } catch (err) {
    log.failure(SCOPE, 'resetPassword', err);
    throw err;
  }
};

// ======================= profile =======================
/**
 * Edits the caller's OWN profile. Only these four fields can ever be written (an explicit whitelist), so
 * even if a controller passed extra data, e-mail, role, status and password could not be touched.
 */
export const updateProfile = async (
  userId: string,
  data: { name?: string; phone?: string; dateOfBirth?: Date; avatar?: string },
) => {
  try {
    const updates: Partial<Pick<IUser, 'name' | 'phone' | 'dateOfBirth' | 'avatar'>> = {};
    if (data.name !== undefined) updates.name = data.name;
    if (data.phone !== undefined) updates.phone = data.phone;
    if (data.dateOfBirth !== undefined) updates.dateOfBirth = data.dateOfBirth;
    if (data.avatar !== undefined) updates.avatar = data.avatar;

    const user = await User.findByIdAndUpdate(userId, { $set: updates }, { new: true, runValidators: true });
    if (!user) throw new ApiError(404, 'User not found');
    log.success(SCOPE, `Profile updated: ${maskEmail(user.email)}`);
    return user;
  } catch (err) {
    log.failure(SCOPE, 'updateProfile', err);
    throw err;
  }
};
/** Uploads a new profile picture for the CALLER and removes the previous uploaded one. */
export const updateAvatar = async (userId: string, file: Express.Multer.File | undefined) => {
  let newPublicId: string | undefined;
  try {
    if (!file) throw new ApiError(400, 'Choose an image to upload (field name "image")');
    if (!cloudinaryEnabled) throw new ApiError(503, 'Image storage is not configured on the server');

    const user = await User.findById(userId).select('+avatarPublicId');
    if (!user) throw new ApiError(404, 'User not found');

    const uploaded = await uploadImageBuffer(file.buffer, { subfolder: 'avatars', transformation: AVATAR_TRANSFORMATION });
    newPublicId = uploaded.public_id;

    const oldPublicId = user.avatarPublicId;
    user.avatar = uploaded.secure_url;
    user.avatarPublicId = uploaded.public_id;
    await user.save();

    await deleteImage(oldPublicId); // best effort, never throws
    log.success(SCOPE, `Avatar updated: ${maskEmail(user.email)}`);
    return user;
  } catch (err) {
    if (newPublicId) await deleteImage(newPublicId); // DB save failed: do not leave an orphan in Cloudinary
    log.failure(SCOPE, 'updateAvatar', err);
    throw err;
  }
};

/** Removes the caller's profile picture. */
export const removeAvatar = async (userId: string) => {
  try {
    const user = await User.findById(userId).select('+avatarPublicId');
    if (!user) throw new ApiError(404, 'User not found');

    const oldPublicId = user.avatarPublicId;
    user.avatar = undefined;
    user.avatarPublicId = undefined;
    await user.save();

    await deleteImage(oldPublicId);
    log.success(SCOPE, `Avatar removed: ${maskEmail(user.email)}`);
    return user;
  } catch (err) {
    log.failure(SCOPE, 'removeAvatar', err);
    throw err;
  }
};

export const changePassword = async (
  userId: string,
  currentSessionId: string | undefined,
  input: { currentPassword?: string; newPassword: string },
  meta: ClientMeta = {},
) => {
  try {
    const user = await User.findById(userId).select('+passwordHash');
    if (!user) throw new ApiError(404, 'User not found');

    // Admin accounts cannot change their own password; the primary super admin does it for them.
    // (A forgotten password is still recoverable with the e-mail code, see forgotPassword.)
    if (!canChangeOwnPassword(user.role)) {
      throw new ApiError(
        403,
        'Password changes for admin accounts are managed by the primary super admin. If you cannot log in, use "Forgot password".',
        { code: 'PASSWORD_MANAGED_BY_PRIMARY' },
      );
    }

    if (user.passwordHash) {
      if (!input.currentPassword || !(await comparePassword(input.currentPassword, user.passwordHash)))
        throw new ApiError(400, 'Current password is incorrect');
    }

    user.passwordHash = await hashPassword(input.newPassword);
    user.passwordChangedAt = new Date();
    user.superAdminId = null; // the owner changed it, not a super admin
    await user.save();

    // sign out all OTHER devices, keep this one
    await Session.deleteMany({ userId, ...(currentSessionId ? { _id: { $ne: currentSessionId } } : {}) });
    const owner = { id: String(user._id), email: user.email };
    await recordPasswordChange({ target: { ...owner, role: user.role }, changedBy: owner, method: 'self_change', ...meta });
    log.success(SCOPE, `Password changed: ${maskEmail(user.email)}; other sessions signed out`);
  } catch (err) {
    log.failure(SCOPE, 'changePassword', err);
    throw err;
  }
};
