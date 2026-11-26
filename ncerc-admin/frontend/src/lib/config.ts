/**
 * Base URL of the backend API, INCLUDING "/api" (the same convention as your other projects):
 *   NEXT_PUBLIC_API_URL=http://localhost:5000/api      ->  calls are written as "/auth/login"
 * If the value is written without "/api", it is added, so either style works.
 */
const raw = (process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:5000/api').trim().replace(/\/+$/, '');
export const API_URL = raw.endsWith('/api') ? raw : `${raw}/api`;

/** Must match OTP_LENGTH in the backend .env. */
export const OTP_LENGTH = 6;
