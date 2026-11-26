import { RequestHandler, Router } from 'express';
import { googleEnabled, facebookEnabled } from '../../config/env';
import { authenticate } from '../../middlewares/authenticate';
import { authLimiter, forgotPasswordLimiter } from '../../middlewares/rateLimiter';
import { validate } from '../../middlewares/validate';
import { ApiError } from '../../utils/ApiError';
import { uploadImage } from '../../middlewares/upload';
import * as c from './auth.controller';
import * as v from './auth.validation';

const router = Router();

const providerEnabled =
  (enabled: boolean, name: string): RequestHandler =>
    (_req, _res, next) =>
      enabled ? next() : next(new ApiError(501, `${name} login is not configured`));
router.post('/signup', authLimiter, validate(v.signupSchema), c.signup);
router.post('/verify-otp', authLimiter, validate(v.verifyOtpSchema), c.verifyOtp);
router.post('/resend-otp', authLimiter, validate(v.resendOtpSchema), c.resendOtp);
router.post('/login', authLimiter, validate(v.loginSchema), c.login);
router.post('/refresh', authLimiter, c.refresh);
router.post('/logout', c.logout);
router.post('/forgot-password', forgotPasswordLimiter, validate(v.forgotPasswordSchema), c.forgotPassword);
router.post('/forgot-password/verify-otp', authLimiter, validate(v.verifyOtpSchema), c.verifyResetOtp);
router.post('/reset-password/:token', authLimiter, validate(v.resetPasswordSchema), c.resetPassword);
// social login
router.get('/google', providerEnabled(googleEnabled, 'Google'), c.socialStart('google'));
router.get('/google/callback', providerEnabled(googleEnabled, 'Google'), c.socialCallback('google'));
router.get('/facebook', providerEnabled(facebookEnabled, 'Facebook'), c.socialStart('facebook'));
router.get('/facebook/callback', providerEnabled(facebookEnabled, 'Facebook'), c.socialCallback('facebook'));
// current user
router.get('/get-me', authenticate, c.getMe);
router.patch('/update-me', authenticate, validate(v.updateProfileSchema), c.updateMe);
router.patch('/update-avatar', authenticate, uploadImage, c.updateMyAvatar);
router.delete('/remove-avatar', authenticate, c.removeMyAvatar);
router.patch('/change-my-password', authenticate, validate(v.changePasswordSchema), c.changeMyPassword);
export default router;
