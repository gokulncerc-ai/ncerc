const recentlyLogged = new Map<string, number>();
const REPEAT_AFTER_MS = 10_000;

const isAbort = (error: unknown): boolean => (error as { name?: string } | null)?.name === 'AbortError';

/** no-cors: this succeeds whenever ANY server answers, even if CORS would block a normal request. */
const pingBackend = async (origin: string): Promise<boolean> => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 3000);
  try {
    await fetch(`${origin}/health`, { mode: 'no-cors', cache: 'no-store', signal: controller.signal });
    return true;
  } catch {
    return false;
  } finally {
    clearTimeout(timer);
  }
};

export function logNetworkFailure(method: string, url: string, error?: unknown): void {
  if (process.env.NODE_ENV === 'production' || typeof window === 'undefined') return;
  if (isAbort(error)) return; // cancelled on purpose (page change / React Strict Mode): not a real failure

  const key = `${method} ${url}`;
  const now = Date.now();
  if (now - (recentlyLogged.get(key) ?? 0) < REPEAT_AFTER_MS) return;
  recentlyLogged.set(key, now);

  const apiOrigin = new URL(url, window.location.href).origin;
  const pageOrigin = window.location.origin;

  void pingBackend(apiOrigin).then((backendUp) => {
    const diagnosis = backendUp
      ? `The backend answered ${apiOrigin}/health, so it IS running. The browser still blocked this request, which means CORS or cookies:\n` +
      `  1. backend .env: ADMIN_FRONTEND_URL=${pageOrigin}  (exact: same http/https, host and port, NO trailing slash). Restart the backend.\n` +
      `     The backend terminal prints "CORS blocked" if this is the cause.\n` +
      `  2. The request must be sent with credentials: 'include' so the refresh cookie travels with it.\n` +
      `  3. Use "localhost" on both sides, not 127.0.0.1 on one of them.`
      : `Nothing answered at ${apiOrigin}/health, so the backend is not reachable:\n` +
      `  1. Start it: cd backend && npm run dev, then read its terminal for a startup error (.env validation, MongoDB).\n` +
      `  2. Check the API URL in frontend/.env.local points to ${apiOrigin} and restart next dev.\n` +
      `  3. Make sure the backend port matches (PORT in backend/.env).`;
    console.warn(`[api] ${method} ${url} got NO response.\n${diagnosis}`);
  });
}