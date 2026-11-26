import { CorsOptions } from 'cors';
import { env } from './env';
import { ApiError } from '../utils/ApiError';

const clean = (url: string) => url.trim().replace(/\/+$/, '');

const allowedOrigins = new Set(
  [
    env.ADMIN_FRONTEND_URL,
    env.NCERC_WEBSITE_URL,
    ...env.EXTRA_ALLOWED_ORIGINS.split(',').filter(Boolean),
  ].map(clean),
);

const warned = new Set<string>(); // print each blocked origin once, not on every request

export const corsOptions: CorsOptions = {
  origin(origin, callback) {
    // no Origin header = server-to-server call (Next.js SSR, curl, health checks)
    if (!origin || allowedOrigins.has(clean(origin))) return callback(null, true);

    // The browser only shows "Failed to fetch" for a CORS refusal, so the reason is printed HERE.
    if (!warned.has(origin)) {
      warned.add(origin);
      console.warn(
        `⚠️  CORS blocked a request from origin "${origin}".\n` +
        `   Allowed origins: ${[...allowedOrigins].join(', ')}\n` +
        `   Fix: set ADMIN_FRONTEND_URL=${origin} (or add it to EXTRA_ALLOWED_ORIGINS) in the backend .env, then restart the backend.`,
      );
    }
    return callback(new ApiError(403, 'Origin not allowed by CORS'));
  },
  credentials: true, // refresh-token cookie
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  maxAge: 86400,
};
