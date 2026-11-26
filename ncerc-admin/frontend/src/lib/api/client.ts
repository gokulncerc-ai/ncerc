import type { Envelope } from '@/types';
import { API_URL } from '../config';
import { logNetworkFailure } from '../devlog';
import { refreshSession } from '../auth/session';
import { tokenStore } from '../auth/tokenStore';

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public code?: string,
    public details?: unknown,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

/** Field messages from a 422 response: { email: "Enter a valid email", ... } */
export const fieldErrors = (err: unknown): Record<string, string> => {
  const out: Record<string, string> = {};
  if (err instanceof ApiError && Array.isArray(err.details)) {
    for (const d of err.details as { field?: string; message?: string }[]) {
      if (d.field && d.message && !out[d.field]) out[d.field] = d.message;
    }
  }
  return out;
};

/** The text to show a person. For a 422 it prefers the first specific message over the generic "Validation failed". */
export const errorMessage = (err: unknown, fallback = 'Something went wrong. Please try again.'): string => {
  if (err instanceof ApiError && err.status === 422 && Array.isArray(err.details)) {
    const first = (err.details as { message?: string }[]).find((d) => d.message)?.message;
    if (first) return first;
  }
  return err instanceof Error ? err.message : fallback;
};

const NETWORK_MESSAGE = 'Cannot reach the server. Make sure the API is running and allows this website (CORS), then try again.';

let onSessionExpired: (() => void) | null = null;
/** AuthProvider registers this so a dead session sends the user back to the login page. */
export const setSessionExpiredHandler = (fn: (() => void) | null): void => {
  onSessionExpired = fn;
};

type Query = Record<string, string | number | boolean | undefined | null>;

export interface RequestOptions {
  method?: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  body?: unknown;
  form?: FormData;
  query?: Query;
  /** false for public endpoints . Default true. */
  auth?: boolean;
  signal?: AbortSignal;
}

const buildUrl = (path: string, query?: Query): string => {
  const url = new URL(`${API_URL}${path}`);
  Object.entries(query ?? {}).forEach(([k, v]) => {
    if (v !== undefined && v !== null && v !== '') url.searchParams.set(k, String(v));
  });
  return url.toString();
};

const send = (path: string, opts: RequestOptions, token: string | null): Promise<Response> => {
  const headers: Record<string, string> = { Accept: 'application/json' };
  if (token) headers.Authorization = `Bearer ${token}`;
  let body: BodyInit | undefined;
  if (opts.form) body = opts.form; // the browser sets the multipart boundary itself
  else if (opts.body !== undefined) {
    headers['Content-Type'] = 'application/json';
    body = JSON.stringify(opts.body);
  }
  return fetch(buildUrl(path, opts.query), {
    method: opts.method ?? 'GET',
    headers,
    body,
    credentials: 'include', // sends the httpOnly refresh cookie to /api/auth/*
    signal: opts.signal,
  });
};

export async function api<T = unknown>(path: string, opts: RequestOptions = {}): Promise<Envelope<T>> {
  const auth = opts.auth ?? true;
  let res: Response;
  try {
    res = await send(path, opts, auth ? tokenStore.get() : null);
  } catch (e) {
    if ((e as Error).name === 'AbortError') throw e;
    logNetworkFailure(opts.method ?? 'GET', buildUrl(path, opts.query));
    throw new ApiError(0, NETWORK_MESSAGE);
  }

  if (res.status === 401 && auth) {
    const user = await refreshSession();
    if (user) {
      try {
        res = await send(path, opts, tokenStore.get());
      } catch (e) {
        if ((e as Error).name === 'AbortError') throw e;
        logNetworkFailure(opts.method ?? 'GET', buildUrl(path, opts.query));
        throw new ApiError(0, NETWORK_MESSAGE);
      }
    } else {
      onSessionExpired?.();
    }
  }

  const text = await res.text();
  let json: Record<string, unknown> = {};
  try {
    json = text ? (JSON.parse(text) as Record<string, unknown>) : {};
  } catch {
    /* non-JSON error page from a proxy */
  }

  if (!res.ok) {
    const details = json.details as { code?: string } | unknown[] | undefined;
    const code = details && !Array.isArray(details) ? (details as { code?: string }).code : undefined;
    throw new ApiError(res.status, (json.message as string) ?? `Request failed (${res.status})`, code, details);
  }
  return json as unknown as Envelope<T>;
}