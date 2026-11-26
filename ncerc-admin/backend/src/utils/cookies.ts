import { CookieOptions, Response } from 'express';
import { env, isProd } from '../config/env';

export const REFRESH_COOKIE = 'ncerc_rt';

const baseOptions = (): CookieOptions => ({
  httpOnly: true,
  secure: isProd || env.COOKIE_SAME_SITE === 'none',
  sameSite: env.COOKIE_SAME_SITE,
  domain: env.COOKIE_DOMAIN,
  path: '/api/auth', // the cookie is only sent to auth endpoints
});

export const setRefreshCookie = (res: Response, token: string): void => {
  res.cookie(REFRESH_COOKIE, token, {
    ...baseOptions(),
    maxAge: env.REFRESH_TOKEN_TTL_DAYS * 24 * 60 * 60 * 1000,
  });
};

export const clearRefreshCookie = (res: Response): void => {
  res.clearCookie(REFRESH_COOKIE, baseOptions());
};
