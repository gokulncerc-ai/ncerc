import { Request, RequestHandler, Response } from 'express';
import passport from 'passport';
import { env } from '../../config/env';
import { USER_STATUS } from '../../constants/roles';
import { accountCapabilities } from '../../utils/accountPolicy';
import { asyncHandler } from '../../utils/asyncHandler';
import { clearRefreshCookie, REFRESH_COOKIE, setRefreshCookie } from '../../utils/cookies';
import { log, maskEmail } from '../../utils/logger';
import { User } from '../users/user.model';
import * as authService from './auth.service';
const SCOPE = 'auth';

const meta = (req: Request): authService.ClientMeta => ({ userAgent: req.get('user-agent'), ip: req.ip });

// ---------- signup with OTP ----------
export const signup = asyncHandler(async (req, res) => {
  try {
    const data = await authService.signup(req.body);
    res.status(201).json({
      success: true,
      message: 'We sent a verification code to your email.',
      data,
    });
  } catch (err) {
    log.failure(SCOPE, 'POST /signup', err);
    throw err;
  }
});

export const verifyOtp = asyncHandler(async (req, res) => {
  try {
    const { status } = await authService.verifyOtp(req.body.email, req.body.otp);
    res.json({
      success: true,
      message:
        status === USER_STATUS.ACTIVE
          ? 'Email verified. You can now log in.'
          : 'Email verified. You can log in once the super admin approves your account.',
      data: { status },
    });
  } catch (err) {
    log.failure(SCOPE, 'POST /verify-otp', err);
    throw err;
  }
});

export const resendOtp = asyncHandler(async (req, res) => {
  try {
    const data = await authService.resendOtp(req.body.email);
    res.json({ success: true, message: 'A new verification code has been sent.', data });
  } catch (err) {
    log.failure(SCOPE, 'POST /resend-otp', err);
    throw err;
  }
});

// ---------- login / session ----------
export const login = asyncHandler(async (req, res) => {
  try {
    const { user, accessToken, refreshToken } = await authService.login(req.body, meta(req));
    setRefreshCookie(res, refreshToken);
    res.json({ success: true, data: { user, accessToken } });
  } catch (err) {
    log.failure(SCOPE, 'POST /login', err);
    throw err;
  }
});

export const refresh = asyncHandler(async (req, res) => {
  try {
    const { user, accessToken, refreshToken } = await authService.refresh(req.cookies?.[REFRESH_COOKIE]);
    setRefreshCookie(res, refreshToken);
    res.json({ success: true, data: { user, accessToken } });
  } catch (err) {
    clearRefreshCookie(res); // a bad or expired refresh token must not stay in the browser
    log.failure(SCOPE, 'POST /refresh', err);
    throw err;
  }
});

export const logout = asyncHandler(async (req, res) => {
  try {
    await authService.logout(req.cookies?.[REFRESH_COOKIE]);
    clearRefreshCookie(res);
    res.json({ success: true, message: 'Logged out' });
  } catch (err) {
    log.failure(SCOPE, 'POST /logout', err);
    throw err;
  }
});

// ---------- password reset ----------
export const forgotPassword = asyncHandler(async (req, res) => {
  try {
    const data = await authService.forgotPassword(req.body.email);
    res.json({
      success: true,
      message: 'If an account exists for that email, a verification code has been sent.',
      data, // identical for every e-mail, so it reveals nothing
    });
  } catch (err) {
    log.failure(SCOPE, 'POST /forgot-password', err);
    throw err;
  }
});

export const verifyResetOtp = asyncHandler(async (req, res) => {
  try {
    const data = await authService.verifyResetOtp(req.body.email, req.body.otp);
    res.json({ success: true, message: 'Code verified. You can now set a new password.', data });
  } catch (err) {
    log.failure(SCOPE, 'POST /forgot-password/verify-otp', err);
    throw err;
  }
});

export const resetPassword = asyncHandler(async (req, res) => {
  try {
    await authService.resetPassword(req.params.token, req.body.password, meta(req));
    res.json({ success: true, message: 'Password updated. Please log in.' });
  } catch (err) {
    log.failure(SCOPE, 'POST /reset-password', err);
    throw err;
  }
});

// ---------- current user ----------
export const getMe = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.user!.id);
    // capabilities = exactly what the backend will accept for this account, so the frontend never guesses
    res.json({ success: true, data: { user, capabilities: accountCapabilities(req.user!) } });
  } catch (err) {
    log.failure(SCOPE, 'GET /me', err);
    throw err;
  }
});

export const updateMe = asyncHandler(async (req, res) => {
  try {
    const user = await authService.updateProfile(req.user!.id, req.body);
    res.json({ success: true, data: { user } });
  } catch (err) {
    log.failure(SCOPE, 'PATCH /me', err);
    throw err;
  }
});

export const updateMyAvatar = asyncHandler(async (req, res) => {
  try {
    const user = await authService.updateAvatar(req.user!.id, req.file);
    res.json({ success: true, message: 'Profile picture updated', data: { user } });
  } catch (err) {
    log.failure(SCOPE, 'PATCH /me/avatar', err);
    throw err;
  }
});

export const removeMyAvatar = asyncHandler(async (req, res) => {
  try {
    const user = await authService.removeAvatar(req.user!.id);
    res.json({ success: true, message: 'Profile picture removed', data: { user } });
  } catch (err) {
    log.failure(SCOPE, 'DELETE /me/avatar', err);
    throw err;
  }
});

export const changeMyPassword = asyncHandler(async (req, res) => {
  try {
    await authService.changePassword(req.user!.id, req.sessionId, req.body, meta(req));
    res.json({ success: true, message: 'Password changed' });
  } catch (err) {
    log.failure(SCOPE, 'PATCH /me/password', err);
    throw err;
  }
});

// ---------- Google / Facebook ----------
const front = (path: string) => `${env.ADMIN_FRONTEND_URL}${path}`;
const label = (provider: 'google' | 'facebook') => (provider === 'google' ? 'Google' : 'Facebook');

/** Step 1: send the browser to Google/Facebook. */
export const socialStart = (provider: 'google' | 'facebook'): RequestHandler =>
  passport.authenticate(provider, {
    session: false,
    scope: provider === 'google' ? ['profile', 'email'] : ['email'],
  });

/** Step 2: the provider redirects back here. We always finish by redirecting to the admin frontend. */
export const socialCallback =
  (provider: 'google' | 'facebook'): RequestHandler =>
    (req: Request, res: Response, next) => {
      passport.authenticate(provider, { session: false }, async (err: unknown, user?: Express.User) => {
        try {
          if (err || !user) {
            // the browser only sees "oauth_failed"; the real reason is printed here
            log.failure(SCOPE, `${label(provider)} login`, err ?? new Error('provider returned no user'));
            return res.redirect(front('/login?error=oauth_failed'));
          }

          if (user.status === USER_STATUS.PENDING) {
            log.info(SCOPE, `${label(provider)} login: ${maskEmail(user.email)} is waiting for super admin approval`);
            return res.redirect(front('/pending-approval'));
          }
          if (user.status === USER_STATUS.SUSPENDED) {
            log.warn(SCOPE, `${label(provider)} login refused: ${maskEmail(user.email)} is suspended`);
            return res.redirect(front('/login?error=suspended'));
          }

          const { refreshToken } = await authService.startSession(user.id, user.role, meta(req));
          setRefreshCookie(res, refreshToken);
          log.success(SCOPE, `${label(provider)} login successful: ${maskEmail(user.email)} (role: ${user.role})`);
          // the frontend's /oauth/callback page calls POST /api/auth/refresh to receive the access token
          res.redirect(front('/oauth/callback'));
        } catch (e) {
          log.failure(SCOPE, `${label(provider)} callback`, e);
          next(e);
        }
      })(req, res, next);
    };
