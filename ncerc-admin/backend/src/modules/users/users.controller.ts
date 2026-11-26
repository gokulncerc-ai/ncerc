import { asyncHandler } from '../../utils/asyncHandler';
import { log, maskEmail } from '../../utils/logger';
import * as service from './users.service';
import { AdminPageQuery, ListAdminsQuery, PasswordAuditQuery } from './users.validation';

/**
 * try   -> call the service, send the response
 * catch -> log the failure ONCE (skipped if the service already logged it), then re-throw so the
 *          global errorHandler sends the right HTTP status.
 * Success messages (who was created / approved / ...) are printed by the service.
 */
const SCOPE = 'admins';

export const list = asyncHandler(async (req, res) => {
  try {
    const { items, pagination } = await service.listAdmins(req.query as unknown as ListAdminsQuery);
    log.info(SCOPE, `Listed ${items.length} of ${pagination.total} account(s) (page ${pagination.page})`);
    res.json({ success: true, data: items, pagination });
  } catch (err) {
    log.failure(SCOPE, 'GET /list', err);
    throw err;
  }
});

export const listPending = asyncHandler(async (req, res) => {
  try {
    const { items, pagination } = await service.listPendingAdmins(req.query as unknown as AdminPageQuery);
    log.info(SCOPE, `Pending approvals: ${pagination.total} admin(s) waiting (showing ${items.length})`);
    res.json({ success: true, data: items, pagination });
  } catch (err) {
    log.failure(SCOPE, 'GET /pending', err);
    throw err;
  }
});

export const listActive = asyncHandler(async (req, res) => {
  try {
    const { items, pagination } = await service.listActiveAdmins(req.query as unknown as AdminPageQuery);
    log.info(SCOPE, `Active admins: ${pagination.total} in total (showing ${items.length})`);
    res.json({ success: true, data: items, pagination });
  } catch (err) {
    log.failure(SCOPE, 'GET /active', err);
    throw err;
  }
});

export const getOne = asyncHandler(async (req, res) => {
  try {
    const data = await service.getAdminDetails(req.params.id);
    log.info(SCOPE, `Viewed account details: ${maskEmail(String(data.user.email))}`);
    res.json({ success: true, data });
  } catch (err) {
    log.failure(SCOPE, 'GET /:id', err);
    throw err;
  }
});

export const create = asyncHandler(async (req, res) => {
  try {
    const admin = await service.createAdmin(req.body);
    res.status(201).json({ success: true, data: { user: admin } });
  } catch (err) {
    log.failure(SCOPE, 'POST /create', err);
    throw err;
  }
});

export const approve = asyncHandler(async (req, res) => {
  try {
    const admin = await service.approveAdmin(req.params.id, req.user!.id);
    res.json({ success: true, data: { user: admin } });
  } catch (err) {
    log.failure(SCOPE, 'PATCH /:id/approve', err);
    throw err;
  }
});

export const suspend = asyncHandler(async (req, res) => {
  try {
    const admin = await service.suspendAdmin(req.params.id, req.user!.id);
    res.json({ success: true, data: { user: admin } });
  } catch (err) {
    log.failure(SCOPE, 'PATCH /:id/suspend', err);
    throw err;
  }
});

export const remove = asyncHandler(async (req, res) => {
  try {
    await service.removeAdmin(req.params.id, req.user!.id);
    res.json({ success: true, message: 'Admin removed' });
  } catch (err) {
    log.failure(SCOPE, 'DELETE /:id', err);
    throw err;
  }
});

// ---------- super admin creation (OTP) ----------
export const startSuperAdmin = asyncHandler(async (req, res) => {
  try {
    const data = await service.startSuperAdminCreation(req.body);
    res.status(201).json({ success: true, message: `A verification code was sent to ${data.email}.`, data });
  } catch (err) {
    log.failure(SCOPE, 'POST /create-super-admin', err);
    throw err;
  }
});

export const verifySuperAdmin = asyncHandler(async (req, res) => {
  try {
    const user = await service.verifySuperAdminOtp(req.body.email, req.body.otp);
    res.status(201).json({ success: true, message: 'Super admin account created.', data: { user } });
  } catch (err) {
    log.failure(SCOPE, 'POST /create-super-admin/verify-otp', err);
    throw err;
  }
});

export const resendSuperAdmin = asyncHandler(async (req, res) => {
  try {
    const data = await service.resendSuperAdminOtp(req.body.email);
    res.json({ success: true, message: 'A new verification code has been sent.', data });
  } catch (err) {
    log.failure(SCOPE, 'POST /create-super-admin/resend-otp', err);
    throw err;
  }
});

export const managePassword = asyncHandler(async (req, res) => {
  try {
    const user = await service.superAdminManagePassword(req.params.id, req.user!, req.body.newPassword, {
      ip: req.ip,
      userAgent: req.get('user-agent'),
    });
    res.json({ success: true, message: 'Password updated. The account was signed out on all devices.', data: { user } });
  } catch (err) {
    log.failure(SCOPE, 'PATCH /:id/manage-password', err);
    throw err;
  }
});

export const passwordAudit = asyncHandler(async (req, res) => {
  try {
    const { items, pagination } = await service.listPasswordAudit(req.query as unknown as PasswordAuditQuery);
    log.info(SCOPE, `Password audit viewed: ${items.length} of ${pagination.total} entr${pagination.total === 1 ? 'y' : 'ies'}`);
    res.json({ success: true, data: items, pagination });
  } catch (err) {
    log.failure(SCOPE, 'GET /password-audit', err);
    throw err;
  }
});

//  super admin: forgot password (public)
export const forgotPasswordSuperAdmin = asyncHandler(async (req, res) => {
  try {
    const data = await service.requestSuperAdminResetCode(req.body.email, 'start');
    res.json({
      success: true,
      message: 'If this email belongs to a super admin account, a verification code has been sent.',
      data,
    });
  } catch (err) {
    log.failure(SCOPE, 'POST /super-admin/forgot-password', err);
    throw err;
  }
});

export const resendForgotPasswordSuperAdmin = asyncHandler(async (req, res) => {
  try {
    const data = await service.requestSuperAdminResetCode(req.body.email, 'resend');
    res.json({
      success: true,
      message: 'If this email belongs to a super admin account, a new verification code has been sent.',
      data,
    });
  } catch (err) {
    log.failure(SCOPE, 'POST /super-admin/forgot-password/resend-otp', err);
    throw err;
  }
});

export const verifyForgotPasswordSuperAdmin = asyncHandler(async (req, res) => {
  try {
    const data = await service.verifySuperAdminResetOtp(req.body.email, req.body.otp);
    res.json({ success: true, message: 'Code verified. You can now set a new password.', data });
  } catch (err) {
    log.failure(SCOPE, 'POST /super-admin/forgot-password/verify-otp', err);
    throw err;
  }
});

export const resetPasswordSuperAdmin = asyncHandler(async (req, res) => {
  try {
    await service.resetSuperAdminPassword(req.body.resetToken, req.body.newPassword, {
      ip: req.ip,
      userAgent: req.get('user-agent'),
    });
    res.json({ success: true, message: 'Password updated. Please log in with your new password.' });
  } catch (err) {
    log.failure(SCOPE, 'POST /super-admin/reset-password', err);
    throw err;
  }
});

// ---------- super admin: own account (logged in) ----------
export const changeMyPassword = asyncHandler(async (req, res) => {
  try {
    await service.changeOwnPassword(req.user!.id, req.body.currentPassword, req.body.newPassword, {
      ip: req.ip,
      userAgent: req.get('user-agent'),
    });
    res.json({ success: true, message: 'Password changed. You were signed out on all devices; please log in again.' });
  } catch (err) {
    log.failure(SCOPE, 'PATCH /me/change-password', err);
    throw err;
  }
});

export const updateMyProfile = asyncHandler(async (req, res) => {
  try {
    const user = await service.updateOwnProfile(req.user!.id, req.body);
    res.json({ success: true, message: 'Profile updated.', data: { user } });
  } catch (err) {
    log.failure(SCOPE, 'PATCH /me/profile', err);
    throw err;
  }
});