import { API_URL } from '../config';
import { logNetworkFailure } from '../devlog';
import type { User } from '@/types';
import { tokenStore } from './tokenStore';

interface RefreshBody {
  data?: { user: User; accessToken: string };
}

let inflight: Promise<User | null> | null = null;

/**
 * Trades the httpOnly refresh cookie for a new access token.
 *
 * Refresh tokens are SINGLE-USE on the backend. If two callers refreshed at the same moment (React
 * StrictMode runs effects twice in development; several requests can hit 401 together), the second would
 * fail and log the user out. So callers that overlap share ONE network request.
 */
export function refreshSession(): Promise<User | null> {
  if (!inflight) {
    inflight = (async () => {
      try {
        const res = await fetch(`${API_URL}/auth/refresh`, { method: 'POST', credentials: 'include' });
        if (!res.ok) {
          tokenStore.set(null);
          return null;
        }
        const body = (await res.json()) as RefreshBody;
        if (!body.data) {
          tokenStore.set(null);
          return null;
        }
        tokenStore.set(body.data.accessToken);
        return body.data.user;
      } catch {
        logNetworkFailure('POST', `${API_URL}/auth/refresh`);
        tokenStore.set(null);
        return null;
      } finally {
        inflight = null;
      }
    })();
  }
  return inflight;
}
