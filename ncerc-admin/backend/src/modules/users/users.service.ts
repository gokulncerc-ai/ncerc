import { createHmac, randomBytes, randomInt, timingSafeEqual } from 'crypto';
import { FilterQuery, Types } from 'mongoose';
import { env, isProd } from '../../config/env';
import { isMailConfigured, otpEmail, sendMail, welcomeEmail } from '../../config/mail';
import { passwordChangedByAdminEmail, passwordChangedNoticeEmail } from '../../config/mailTemplates';
import { Role, ROLES, USER_STATUS } from '../../constants/roles';
import { ApiError } from '../../utils/ApiError';
import { log, maskEmail } from '../../utils/logger';
import { comparePassword, hashPassword } from '../../utils/password';
import { assertPrimarySuperAdmin } from '../../utils/primaryAdmin';
import { andFilters, escapeRegex, paginationMeta } from '../../utils/query';
import * as authService from '../auth/auth.service';
import { clearSignup, consumeOtp, getPendingSignup, savePendingSignup } from '../auth/otp.model';
import { Session } from '../auth/session.model';
import { Event, EventStatus } from '../events/event.model';
import { PasswordAudit, recordPasswordChange } from './passwordAudit.model';
import { SuperAdminReset } from './superAdminReset.model';
import { IUser, User, UserDoc } from './user.model';
import { AdminPageQuery, ListAdminsQuery, PasswordAuditQuery, UpdateOwnProfileInput } from './users.validation';
const SCOPE = 'admins';
const RESET_MAX_ATTEMPTS = 5; // wrong codes allowed per code
const RESET_COOLDOWN_SECONDS = 30; // minimum gap between two e-mails
const RESET_MAX_SENDS = 6; // e-mails per session
const RESET_SESSION_MINUTES = 30; // whole flow must finish within this time
const RESET_TOKEN_MINUTES = 10; // time to type the new password after the code was verified
const hashValue = (value: string): string => createHmac('sha256', env.JWT_ACCESS_SECRET).update(value).digest('hex');

export const listAdmins = async ({ status, role, search, page, limit }: ListAdminsQuery) => {
  try {
    const conditions: FilterQuery<IUser>[] = [{ role }];
    if (status) conditions.push({ status });
    if (search) {
      const rx = new RegExp(escapeRegex(search), 'i');
      conditions.push({ $or: [{ name: rx }, { email: rx }] });
    }
    const filter = andFilters(conditions);

    const [items, total] = await Promise.all([
      User.find(filter)
        .sort({ status: 1, createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit),
      User.countDocuments(filter),
    ]);
    return { items, pagination: paginationMeta(page, limit, total) };
  } catch (err) {
    log.failure(SCOPE, 'listAdmins', err);
    throw err;
  }
};

/** Shared by the pending and active lists: normal admins (role "admin") with ONE status. */
const listAdminsByStatus = async (
  status: typeof USER_STATUS.PENDING | typeof USER_STATUS.ACTIVE,
  { search, page, limit }: AdminPageQuery,
  sort: Record<string, 1 | -1>,
  action: string,
) => {
  try {
    const conditions: FilterQuery<IUser>[] = [{ role: ROLES.ADMIN }, { status }];
    if (search) {
      const rx = new RegExp(escapeRegex(search), 'i');
      conditions.push({ $or: [{ name: rx }, { email: rx }] });
    }
    const filter = andFilters(conditions);

    const [items, total] = await Promise.all([
      User.find(filter)
        .sort(sort)
        .skip((page - 1) * limit)
        .limit(limit),
      User.countDocuments(filter),
    ]);
    return { items, pagination: paginationMeta(page, limit, total) };
  } catch (err) {
    log.failure(SCOPE, action, err);
    throw err;
  }
};

/** Admins waiting for approval, longest-waiting first. */
export const listPendingAdmins = (query: AdminPageQuery) =>
  listAdminsByStatus(USER_STATUS.PENDING, query, { createdAt: 1 }, 'listPendingAdmins');

/** Approved admins who can log in, newest first. */
export const listActiveAdmins = (query: AdminPageQuery) =>
  listAdminsByStatus(USER_STATUS.ACTIVE, query, { createdAt: -1 }, 'listActiveAdmins');

/** Full details of ONE account (admin or super admin) for the super admin. */
export const getAdminDetails = async (id: string) => {
  try {
    const user = await User.findById(id).select('+passwordHash'); // only to learn whether a password login exists
    if (!user) throw new ApiError(404, 'Admin not found');

    // how much this admin has published (the super admin controls these events)
    const rows = await Event.aggregate<{ _id: EventStatus; count: number }>([
      { $match: { createdBy: user._id } },
      { $group: { _id: '$status', count: { $sum: 1 } } },
    ]);
    const byStatus: Record<EventStatus, number> = { draft: 0, published: 0, archived: 0 };
    rows.forEach((r) => {
      byStatus[r._id] = r.count;
    });

    // toJSON already removes passwordHash and reset tokens; also hide the social provider ids
    const profile = user.toJSON() as unknown as Record<string, unknown>;
    delete profile.googleId;
    delete profile.facebookId;

    const details: Record<string, unknown> = {
      ...profile,
      authMethods: [
        ...(user.passwordHash ? ['password'] : []),
        ...(user.googleId ? ['google'] : []),
        ...(user.facebookId ? ['facebook'] : []),
      ],
    };

    return {
      user: details,
      events: { total: byStatus.draft + byStatus.published + byStatus.archived, ...byStatus },
    };
  } catch (err) {
    log.failure(SCOPE, 'getAdminDetails', err);
    throw err;
  }
};

/** Super admin can only manage normal admins - never themselves or another super admin. */
const getManageableAdmin = async (id: string, actorId: string) => {
  const target = await User.findById(id);
  if (!target) throw new ApiError(404, 'Admin not found');
  if (target.id === actorId) throw new ApiError(400, 'You cannot perform this action on your own account');
  if (target.role !== ROLES.ADMIN) throw new ApiError(403, 'Super admin accounts cannot be changed here');
  return target;
};

/** Fire-and-forget: a mail problem must not fail the creation (the password is never e-mailed). */
const sendWelcome = (user: { name: string; email: string }, roleLabel: 'admin' | 'super admin') => {
  sendMail({ to: user.email, ...welcomeEmail(user.name, `${env.ADMIN_FRONTEND_URL}/login`, roleLabel) })
    .then(() => {
      if (isMailConfigured) log.success('mail', `Welcome e-mail sent to ${maskEmail(user.email)} (${roleLabel})`);
    })
    .catch((err) => log.error('mail', `Could not send welcome e-mail to ${maskEmail(user.email)}: ${(err as Error).message}`));
};

// ======================= admins =======================
export const createAdmin = async (input: { name: string; email: string; phone?: string; password: string }) => {
  try {
    if (await User.exists({ email: input.email })) throw new ApiError(409, 'An account with this email already exists');
    const admin = await User.create({
      name: input.name,
      email: input.email,
      phone: input.phone,
      passwordHash: await hashPassword(input.password),
      role: ROLES.ADMIN,
      // created by the super admin, who vouches for the e-mail address: no OTP and no approval step
      status: USER_STATUS.ACTIVE,
    });
    log.success(SCOPE, `Admin created by a super admin: ${maskEmail(admin.email)} (active)`);
    sendWelcome(admin, 'admin');
    return admin;
  } catch (err) {
    log.failure(SCOPE, 'createAdmin', err);
    throw err;
  }
};

/** Approves a pending admin (also re-activates a suspended one). */
export const approveAdmin = async (id: string, actorId: string) => {
  try {
    const admin = await getManageableAdmin(id, actorId);
    admin.status = USER_STATUS.ACTIVE;
    await admin.save();
    log.success(SCOPE, `Admin approved: ${maskEmail(admin.email)} (now active)`);
    return admin;
  } catch (err) {
    log.failure(SCOPE, 'approveAdmin', err);
    throw err;
  }
};

export const suspendAdmin = async (id: string, actorId: string) => {
  try {
    const admin = await getManageableAdmin(id, actorId);
    admin.status = USER_STATUS.SUSPENDED;
    await admin.save();
    await Session.deleteMany({ userId: admin.id }); // revoke immediately
    log.success(SCOPE, `Admin suspended: ${maskEmail(admin.email)}; all sessions revoked`);
    return admin;
  } catch (err) {
    log.failure(SCOPE, 'suspendAdmin', err);
    throw err;
  }
};

/** Events created by the removed admin are kept (they stay on the website). */
export const removeAdmin = async (id: string, actorId: string) => {
  try {
    const admin = await getManageableAdmin(id, actorId);
    await Session.deleteMany({ userId: admin.id });
    await admin.deleteOne();
    log.success(SCOPE, `Admin removed: ${maskEmail(admin.email)} (their events were kept)`);
  } catch (err) {
    log.failure(SCOPE, 'removeAdmin', err);
    throw err;
  }
};

// ======================= super admins (OTP) =======================
// A super admin can be created ONLY by an existing, logged-in super admin, and the new person must prove
// they own the e-mail address with a 6-digit code (valid 2 minutes, resendable).
const OTP_SCOPE = 'super-admin' as const;

const roleWord = (role: Role) => (role === ROLES.SUPER_ADMIN ? 'a super admin' : 'an admin');

/** Step 1: check the e-mail is free, park the details temporarily, e-mail the code to the new person. */
export const startSuperAdminCreation = async (input: { name: string; email: string; phone?: string; password: string }) => {
  try {
    const existing = await User.findOne({ email: input.email }).select('role status');
    if (existing) {
      throw new ApiError(409, `This email already belongs to ${roleWord(existing.role)} account`, {
        code: 'EMAIL_EXISTS',
        role: existing.role,
        status: existing.status,
      });
    }

    await savePendingSignup(
      input.email,
      { name: input.name, phone: input.phone, passwordHash: await hashPassword(input.password) },
      OTP_SCOPE,
    );
    log.info(SCOPE, `Super admin creation started for ${maskEmail(input.email)}`);
    return await authService.sendOtp(input.email, OTP_SCOPE); // logs "OTP e-mailed ..."
  } catch (err) {
    log.failure(SCOPE, 'startSuperAdminCreation', err);
    throw err;
  }
};

/** Step 2: a correct code creates the super admin (active immediately). */
export const verifySuperAdminOtp = async (email: string, otp: string) => {
  try {
    const pending = await getPendingSignup(email, OTP_SCOPE);
    if (!pending || !pending.passwordHash) throw authService.sessionExpired();

    await consumeOtp(email, otp, OTP_SCOPE); // throws on wrong / expired / too many attempts

    const existing = await User.findOne({ email }).select('role');
    if (existing) {
      await clearSignup(email, OTP_SCOPE);
      throw new ApiError(409, `This email already belongs to ${roleWord(existing.role)} account`, { code: 'EMAIL_EXISTS' });
    }

    const user = await User.create({
      name: pending.name,
      email,
      phone: pending.phone,
      passwordHash: pending.passwordHash,
      role: ROLES.SUPER_ADMIN,
      status: USER_STATUS.ACTIVE,
    });
    await clearSignup(email, OTP_SCOPE);
    log.success(SCOPE, `Super admin created after e-mail verification: ${maskEmail(email)}`);
    sendWelcome(user, 'super admin');
    return user;
  } catch (err) {
    log.failure(SCOPE, 'verifySuperAdminOtp', err);
    throw err;
  }
};

/** Works after the 2-minute code has expired, for up to 30 minutes after step 1. */
export const resendSuperAdminOtp = async (email: string) => {
  try {
    return await authService.resendOtp(email, OTP_SCOPE);
  } catch (err) {
    log.failure(SCOPE, 'resendSuperAdminOtp', err);
    throw err;
  }
};

// ======================= passwords =======================
// RULES
//   - EVERYONE changes their OWN password through PATCH /api/auth/me/password or the forgot-password OTP flow.
//   - ONLY the primary super admin (the first super admin ever created) may set ANOTHER account's password,
//     for any admin or super admin. No other super admin can, and nobody can set the primary's password.
//   - Every change is written to the PasswordAudit collection (who, whom, how, when, from which IP).

interface RequestMeta {
  ip?: string;
  userAgent?: string;
}

export const superAdminManagePassword = async (
  targetId: string,
  actor: { id: string; name: string; email: string; role: Role },
  newPassword: string,
  meta: RequestMeta = {},
) => {
  try {
    assertPrimarySuperAdmin(actor); // the route checks too; this keeps the rule true if the function is reused

    const target = await User.findById(targetId);
    if (!target) throw new ApiError(404, 'Account not found');

    if (target.id === actor.id) {
      throw new ApiError(400, 'To change your own password use PATCH /api/auth/me/password', { code: 'USE_SELF_SERVICE' });
    }

    target.passwordHash = await hashPassword(newPassword);
    target.passwordChangedAt = new Date();
    target.superAdminId = new Types.ObjectId(actor.id); // who made the LAST change (full history is in PasswordAudit)
    target.passwordResetTokenHash = undefined; // cancel any reset the owner had started
    target.passwordResetExpires = undefined;
    await target.save();
    await Session.deleteMany({ userId: target.id }); // sign the account out everywhere

    await recordPasswordChange({
      target: { id: target.id, email: target.email, role: target.role },
      changedBy: { id: actor.id, email: actor.email },
      method: 'primary_set',
      ...meta,
    });
    log.success(
      SCOPE,
      `Password of ${maskEmail(target.email)} (${target.role}) set by the primary super admin; all sessions revoked; audit saved`,
    );

    // best effort: tell the owner, so a change they did not expect does not go unnoticed
    sendMail({ to: target.email, ...passwordChangedByAdminEmail(target.name, actor.name, `${env.ADMIN_FRONTEND_URL}/login`) }).catch(
      (err) => log.error('mail', `Could not send password-changed notice to ${maskEmail(target.email)}: ${(err as Error).message}`),
    );
    return target;
  } catch (err) {
    log.failure(SCOPE, 'superAdminManagePassword', err);
    throw err;
  }
};

/** Password-change history, newest first. Optionally only the changes made to one account. */
export const listPasswordAudit = async ({ userId, page, limit }: PasswordAuditQuery) => {
  try {
    const filter = userId ? { targetId: new Types.ObjectId(userId) } : {};
    const [items, total] = await Promise.all([
      PasswordAudit.find(filter)
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit),
      PasswordAudit.countDocuments(filter),
    ]);
    return { items, pagination: paginationMeta(page, limit, total) };
  } catch (err) {
    log.failure(SCOPE, 'listPasswordAudit', err);
    throw err;
  }
};
// ======================= super admin: forgot password (public, e-mail OTP) =======================
// STEP 1  requestSuperAdminResetCode  -> e-mails a 6-digit code (only if an ACTIVE super admin owns the address)
// STEP 2  verifySuperAdminResetOtp    -> correct code returns a single-use resetToken (valid 10 minutes)
// STEP 3  resetSuperAdminPassword     -> resetToken + new password; all sessions are revoked
// The answer to step 1 is the same whether or not the e-mail exists, so nobody can probe for accounts.
const safeEqual = (a: string, b: string): boolean => {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  return bufA.length === bufB.length && timingSafeEqual(bufA, bufB);
};

const resetSessionExpired = () =>
  new ApiError(400, 'This reset session has expired. Please start again.', { code: 'RESET_SESSION_EXPIRED' });

const findActiveSuperAdmin = (email: string) =>
  User.findOne({ email, role: ROLES.SUPER_ADMIN, status: USER_STATUS.ACTIVE });

/** Creates a fresh code and e-mails it. Silently does nothing while the cooldown or send limit applies. */
const issueResetOtp = async (user: UserDoc): Promise<void> => {
  const existing = await SuperAdminReset.findOne({ userId: user._id });
  const now = Date.now();

  if (existing) {
    if ((now - existing.lastSentAt.getTime()) / 1000 < RESET_COOLDOWN_SECONDS) {
      log.info(SCOPE, `Password reset code for ${maskEmail(user.email)} not re-sent (cooldown)`);
      return;
    }
    if (existing.sendCount >= RESET_MAX_SENDS) {
      log.info(SCOPE, `Password reset code for ${maskEmail(user.email)} not re-sent (send limit reached)`);
      return;
    }
  }

  const code = String(randomInt(0, 1_000_000)).padStart(6, '0');

  await SuperAdminReset.findOneAndUpdate(
    { userId: user._id },
    {
      $set: {
        email: user.email,
        otpHash: hashValue(code),
        otpExpiresAt: new Date(now + env.OTP_TTL_SECONDS * 1000),
        attempts: 0,
        sendCount: (existing?.sendCount ?? 0) + 1,
        lastSentAt: new Date(now),
        expiresAt: new Date(now + RESET_SESSION_MINUTES * 60_000),
      },
      $unset: { verifiedAt: '', resetTokenHash: '', resetTokenExpiresAt: '' },
    },
    { upsert: true, setDefaultsOnInsert: true },
  );

  try {
    await sendMail({
      to: user.email,
      ...otpEmail(user.name, code, 'password_reset'),
      devPreview: isProd ? undefined : `Super admin password reset code: ${code}`,
    });
    log.success(SCOPE, `Password reset code e-mailed to ${maskEmail(user.email)} (super admin)`);
  } catch (err) {
    await SuperAdminReset.deleteOne({ userId: user._id });
    log.error('mail', `Could not send the password reset code to ${maskEmail(user.email)}: ${(err as Error).message}`);
    throw new ApiError(503, 'We could not send the verification email. Please try again in a moment.');
  }
};

/** Step 1 and "resend": the same rules apply to both. */
export const requestSuperAdminResetCode = async (email: string, action: 'start' | 'resend') => {
  try {
    const clean = email.trim().toLowerCase();
    const user = await findActiveSuperAdmin(clean);

    if (user) {
      await issueResetOtp(user);
    } else {
      log.info(SCOPE, `Password reset (${action}) for ${maskEmail(clean)}: not an active super admin, nothing sent`);
    }

    // identical answer for every e-mail address
    return { email: clean, expiresInSeconds: env.OTP_TTL_SECONDS, resendAfterSeconds: RESET_COOLDOWN_SECONDS };
  } catch (err) {
    log.failure(SCOPE, `requestSuperAdminResetCode(${action})`, err);
    throw err;
  }
};

/** Step 2: a correct code is exchanged for a single-use reset token. */
export const verifySuperAdminResetOtp = async (email: string, otp: string) => {
  try {
    const record = await SuperAdminReset.findOne({ email: email.trim().toLowerCase() });

    if (!record || !record.otpHash || !record.otpExpiresAt) {
      throw new ApiError(400, 'Invalid or expired code. Please request a new one.', { code: 'OTP_INVALID' });
    }
    if (record.otpExpiresAt.getTime() < Date.now()) {
      throw new ApiError(400, 'This code has expired. Please request a new one.', { code: 'OTP_EXPIRED' });
    }
    if (record.attempts >= RESET_MAX_ATTEMPTS) {
      throw new ApiError(429, 'Too many wrong attempts. Please request a new code.', { code: 'OTP_LOCKED' });
    }

    if (!safeEqual(hashValue(otp.trim()), record.otpHash)) {
      record.attempts += 1;
      await record.save();
      const attemptsLeft = Math.max(RESET_MAX_ATTEMPTS - record.attempts, 0);
      throw new ApiError(
        attemptsLeft > 0 ? 400 : 429,
        attemptsLeft > 0
          ? `Incorrect code. ${attemptsLeft} attempt${attemptsLeft === 1 ? '' : 's'} left.`
          : 'Too many wrong attempts. Please request a new code.',
        { code: attemptsLeft > 0 ? 'OTP_INCORRECT' : 'OTP_LOCKED', attemptsLeft },
      );
    }

    const resetToken = randomBytes(32).toString('hex');
    record.otpHash = undefined; // a code works only once
    record.otpExpiresAt = undefined;
    record.attempts = 0;
    record.verifiedAt = new Date();
    record.resetTokenHash = hashValue(resetToken);
    record.resetTokenExpiresAt = new Date(Date.now() + RESET_TOKEN_MINUTES * 60_000);
    await record.save();

    log.success(SCOPE, `Password reset code verified for ${maskEmail(record.email)} (super admin)`);
    return { resetToken, expiresInSeconds: RESET_TOKEN_MINUTES * 60 };
  } catch (err) {
    log.failure(SCOPE, 'verifySuperAdminResetOtp', err);
    throw err;
  }
};

/** Step 3: sets the new password. The owner changes it themselves, so no other super admin is involved. */
export const resetSuperAdminPassword = async (resetToken: string, newPassword: string, meta: RequestMeta = {}) => {
  try {
    const record = await SuperAdminReset.findOne({ resetTokenHash: hashValue(resetToken) });
    if (!record || !record.verifiedAt || !record.resetTokenExpiresAt || record.resetTokenExpiresAt.getTime() < Date.now()) {
      throw resetSessionExpired();
    }

    const user = await findActiveSuperAdmin(record.email);
    if (!user) {
      await record.deleteOne();
      throw resetSessionExpired();
    }

    user.passwordHash = await hashPassword(newPassword);
    user.passwordChangedAt = new Date();
    user.superAdminId = null; // changed by the owner
    user.passwordResetTokenHash = undefined;
    user.passwordResetExpires = undefined;
    await user.save();

    await Session.deleteMany({ userId: user.id }); // sign out everywhere
    await record.deleteOne(); // the token and the session can never be used again

    await recordPasswordChange({
      target: { id: user.id, email: user.email, role: user.role },
      changedBy: { id: user.id, email: user.email },
      method: 'forgot_reset',
      ...meta,
    });
    log.success(SCOPE, `Super admin ${maskEmail(user.email)} reset their password; all sessions revoked; audit saved`);

    sendMail({ to: user.email, ...passwordChangedNoticeEmail(user.name, `${env.ADMIN_FRONTEND_URL}/login`, 'reset') }).catch((err) =>
      log.error('mail', `Could not send password-changed notice to ${maskEmail(user.email)}: ${(err as Error).message}`),
    );
    return user;
  } catch (err) {
    log.failure(SCOPE, 'resetSuperAdminPassword', err);
    throw err;
  }
};

// ======================= super admin: own account (logged in) =======================

/** Change password while logged in: the current password is required. */
export const changeOwnPassword = async (actorId: string, currentPassword: string, newPassword: string, meta: RequestMeta = {}) => {
  try {
    const user = await User.findById(actorId).select('+passwordHash');
    if (!user) throw new ApiError(404, 'Account not found');
    if (user.role !== ROLES.SUPER_ADMIN) throw new ApiError(403, 'Only a super admin can use this endpoint');

    if (!user.passwordHash) {
      throw new ApiError(400, 'This account has no password yet. Use "Forgot password" to set one.', { code: 'NO_PASSWORD_SET' });
    }
    // 400 (not 401) so the frontend does not mistake it for an expired login
    if (!(await comparePassword(currentPassword, user.passwordHash))) {
      throw new ApiError(400, 'Current password is incorrect', { code: 'WRONG_CURRENT_PASSWORD' });
    }

    user.passwordHash = await hashPassword(newPassword);
    user.passwordChangedAt = new Date();
    user.superAdminId = null;
    user.passwordResetTokenHash = undefined;
    user.passwordResetExpires = undefined;
    await user.save();

    await Session.deleteMany({ userId: user.id });
    await SuperAdminReset.deleteOne({ userId: user._id }); // cancel any reset that was in progress

    await recordPasswordChange({
      target: { id: user.id, email: user.email, role: user.role },
      changedBy: { id: user.id, email: user.email },
      method: 'self_change',
      ...meta,
    });
    log.success(SCOPE, `Super admin ${maskEmail(user.email)} changed their password; all sessions revoked; audit saved`);

    sendMail({ to: user.email, ...passwordChangedNoticeEmail(user.name, `${env.ADMIN_FRONTEND_URL}/login`, 'change') }).catch((err) =>
      log.error('mail', `Could not send password-changed notice to ${maskEmail(user.email)}: ${(err as Error).message}`),
    );
    return user;
  } catch (err) {
    log.failure(SCOPE, 'changeOwnPassword', err);
    throw err;
  }
};

/** A super admin edits their OWN profile. Email, role and status can never be changed here. */
export const updateOwnProfile = async (actorId: string, input: UpdateOwnProfileInput) => {
  try {
    const user = await User.findById(actorId);
    if (!user) throw new ApiError(404, 'Account not found');
    if (user.role !== ROLES.SUPER_ADMIN) throw new ApiError(403, 'Only a super admin can use this endpoint');

    if (input.name !== undefined) user.name = input.name;
    if (input.phone !== undefined) user.phone = input.phone ?? undefined;
    if (input.avatar !== undefined) user.avatar = input.avatar ?? undefined;
    await user.save();

    log.success(SCOPE, `Super admin updated their profile: ${maskEmail(user.email)}`);
    return user;
  } catch (err) {
    log.failure(SCOPE, 'updateOwnProfile', err);
    throw err;
  }
};