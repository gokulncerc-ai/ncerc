import rateLimit from 'express-rate-limit';

const make = (windowMs: number, limit: number, message: string) =>
  rateLimit({
    windowMs,
    limit,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
    message: { success: false, message },
  });

const MIN = 60 * 1000;

export const apiLimiter = make(15 * MIN, 600, 'Too many requests, please try again later');
export const authLimiter = make(15 * MIN, 30, 'Too many attempts, please try again in a few minutes');
export const forgotPasswordLimiter = make(60 * MIN, 5, 'Too many reset requests, try again later');
export const publicLimiter = make(MIN, 120, 'Too many requests, please slow down');
export const uploadLimiter = make(15 * MIN, 60, 'Too many uploads, please try again later');
