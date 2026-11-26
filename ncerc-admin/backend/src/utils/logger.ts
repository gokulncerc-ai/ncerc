import { isProd } from '../config/env';
import { ApiError } from './ApiError';

/**
 * Small console logger used by services and controllers.
 *   ✅ 14:05:22 [admins] Admin approved: sh***@gmail.com
 *   ⚠️  14:05:31 [auth] login failed (401): Invalid email or password          <- expected client problem
 *   ❌ 14:05:40 [auth] sendOtp failed (502 EMAIL_SEND_FAILED): We could not...  <- needs attention
 * Never pass passwords, OTP codes, tokens or reset links to these functions.
 */

const time = () => new Date().toLocaleTimeString('en-GB');
const alreadyLogged = new WeakSet<object>();

const info = (scope: string, msg: string): void => console.log(`ℹ️  ${time()} [${scope}] ${msg}`);
const success = (scope: string, msg: string): void => console.log(`✅ ${time()} [${scope}] ${msg}`);
const warn = (scope: string, msg: string): void => console.warn(`⚠️  ${time()} [${scope}] ${msg}`);
const error = (scope: string, msg: string): void => console.error(`❌ ${time()} [${scope}] ${msg}`);

/**
 * Logs a caught error ONCE, however many layers (service, controller) catch and re-throw it.
 * Client mistakes (4xx) are warnings; server problems (5xx / unexpected) are errors.
 */
const failure = (scope: string, action: string, err: unknown): void => {
  if (typeof err === 'object' && err !== null) {
    if (alreadyLogged.has(err)) return;
    alreadyLogged.add(err);
  }

  if (err instanceof ApiError) {
    const code = (err.details as { code?: string } | undefined)?.code;
    const text = `${action} failed (${err.statusCode}${code ? ` ${code}` : ''}): ${err.message}`;
    return err.statusCode >= 500 ? error(scope, text) : warn(scope, text);
  }

  if ((err as { code?: number } | null)?.code === 11000) {
    return warn(scope, `${action} failed (409): duplicate value, record already exists`);
  }

  const e = err instanceof Error ? err : new Error(String(err));
  error(scope, `${action} failed: ${e.message}`);
  if (!isProd && e.stack) console.error(e.stack.split('\n').slice(1, 4).join('\n'));
};

export const log = { info, success, warn, error, failure };

/** "mrseb518@gmail.com" -> "mr***@gmail.com" (keeps logs useful without storing full addresses). */
export const maskEmail = (email?: string | null): string => {
  if (!email) return '(unknown)';
  const [local, domain] = email.split('@');
  return domain ? `${local.slice(0, 2)}***@${domain}` : '***';
};