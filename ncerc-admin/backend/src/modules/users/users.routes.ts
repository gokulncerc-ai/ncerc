import { Router } from 'express';
import { PERMISSIONS } from '../../constants/permissions';
import { authenticate } from '../../middlewares/authenticate';
import { authorize } from '../../middlewares/authorize';
import { authLimiter } from '../../middlewares/rateLimiter';
import { requirePrimarySuperAdmin } from '../../middlewares/requirePrimarySuperAdmin';
import { validate } from '../../middlewares/validate';
import { idParamSchema } from '../../utils/objectId';
import { resendOtpSchema, verifyOtpSchema } from '../auth/auth.validation';
import * as c from './users.controller';
import * as v from './users.validation';

const router = Router();

//  PUBLIC (no login): super admin forgot password
// These must stay ABOVE router.use(authenticate...) because the user cannot log in yet.
router.post('/super-admin/forgot-password', authLimiter, validate(v.superAdminForgotPasswordSchema), c.forgotPasswordSuperAdmin);
router.post('/super-admin/forgot-password/verify-otp', authLimiter, validate(verifyOtpSchema), c.verifyForgotPasswordSuperAdmin);
router.post('/super-admin/forgot-password/resend-otp', authLimiter, validate(resendOtpSchema), c.resendForgotPasswordSuperAdmin);
router.post('/super-admin/reset-password', authLimiter, validate(v.superAdminResetPasswordSchema), c.resetPasswordSuperAdmin);

// everything below is super admin only: send  Authorization: Bearer <super admin access token>
router.use(authenticate, authorize(PERMISSIONS.ADMINS_MANAGE));

// the logged-in super admin's OWN account
router.patch('/me/profile', validate(v.updateOwnProfileSchema), c.updateMyProfile);
router.patch('/me/change-password', authLimiter, validate(v.changeOwnPasswordSchema), c.changeMyPassword);

// admins
router.get('/list', validate(v.listAdminsSchema), c.list);
router.get('/pending-admins', validate(v.adminPageQuerySchema), c.listPending);
router.get('/active-admins', validate(v.adminPageQuerySchema), c.listActive);
router.get('/:id/get-admin-details', validate({ params: idParamSchema }), c.getOne);
router.post('/create', validate(v.createAdminSchema), c.create);
router.patch('/:id/approve', validate({ params: idParamSchema }), c.approve);
router.patch('/:id/suspend', validate({ params: idParamSchema }), c.suspend);
router.delete('/:id/remove-admin', validate({ params: idParamSchema }), c.remove);

// super admins: e-mail OTP (2 minutes) before the account exists
router.post('/create-super-admin', authLimiter, validate(v.createSuperAdminSchema), c.startSuperAdmin);
router.post('/create-super-admin/verify-otp', authLimiter, validate(verifyOtpSchema), c.verifySuperAdmin);
router.post('/create-super-admin/resend-otp', authLimiter, validate(resendOtpSchema), c.resendSuperAdmin);

// PRIMARY super admin only (the first super admin ever created): set anyone's password + read the audit trail
router.patch('/:id/manage-password', requirePrimarySuperAdmin, authLimiter, validate(v.managePasswordSchema), c.managePassword);
router.get('/password-audit', requirePrimarySuperAdmin, validate(v.passwordAuditQuerySchema), c.passwordAudit);

export default router;