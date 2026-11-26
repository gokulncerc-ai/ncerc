import 'dotenv/config';
import { z } from 'zod';

const schema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().int().positive().default(5000),
  BACKEND_URL: z.string().url().default('http://localhost:5000'),

  MONGODB_URI: z.string().min(1, 'MONGODB_URI is required'),

  ADMIN_FRONTEND_URL: z.string().url().default('http://localhost:3001'),
  NCERC_WEBSITE_URL: z.string().url().default('http://localhost:3000'),
  EXTRA_ALLOWED_ORIGINS: z.string().default(''),

  JWT_ACCESS_SECRET: z.string().min(32, 'JWT_ACCESS_SECRET must be at least 32 characters'),
  PRIMARY_SUPER_ADMIN_EMAIL: z.string().trim().toLowerCase().email('PRIMARY_SUPER_ADMIN_EMAIL must be a valid email'),
  ACCESS_TOKEN_EXPIRES_IN: z.string().default('15m'),
  REFRESH_TOKEN_TTL_DAYS: z.coerce.number().int().positive().default(7),
  COOKIE_SAME_SITE: z.enum(['lax', 'strict', 'none']).default('lax'),
  COOKIE_DOMAIN: z.string().optional(),

  SEED_SUPER_ADMIN_NAME: z.string().default('Super Admin'),
  SEED_SUPER_ADMIN_EMAIL: z.string().email().optional(),
  SEED_SUPER_ADMIN_PASSWORD: z.string().min(8).optional(),

  GOOGLE_CLIENT_ID: z.string().optional(),
  GOOGLE_CLIENT_SECRET: z.string().optional(),
  FACEBOOK_APP_ID: z.string().optional(),
  FACEBOOK_APP_SECRET: z.string().optional(),

  // Cloudinary: either the single CLOUDINARY_URL, or the three separate values
  CLOUDINARY_URL: z.string().startsWith('cloudinary://', 'CLOUDINARY_URL must start with cloudinary://').optional(),
  CLOUDINARY_CLOUD_NAME: z.string().optional(),
  CLOUDINARY_API_KEY: z.string().optional(),
  CLOUDINARY_API_SECRET: z.string().optional(),
  CLOUDINARY_FOLDER: z.string().default('ncerc/events'),
  MAX_IMAGE_SIZE_MB: z.coerce.number().positive().max(20).default(5),

  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.coerce.number().int().positive().default(587),
  SMTP_USER: z.string().optional(),
  SMTP_PASS: z.string().optional(),
  MAIL_FROM: z.string().default('NCERC Admin <no-reply@ncerc.local>'),
  REDIS_URL: z.string().default('redis://127.0.0.1:6379'),
  
  OTP_LENGTH: z.coerce.number().int().min(4).max(8).default(6),
  OTP_TTL_SECONDS: z.coerce.number().int().min(30).max(900).default(120),
  OTP_MAX_ATTEMPTS: z.coerce.number().int().min(1).max(10).default(5),
  OTP_RESEND_COOLDOWN_SECONDS: z.coerce.number().int().min(0).max(300).default(30),
  OTP_MAX_SENDS_PER_HOUR: z.coerce.number().int().min(1).max(30).default(5),
  SIGNUP_REQUIRES_APPROVAL: z.enum(['true', 'false']).default('true').transform((v) => v === 'true'),
});

// treat empty strings in .env ("KEY=") as "not set"
const raw = Object.fromEntries(
  Object.entries(process.env).filter(([, v]) => v !== undefined && v !== ''),
);

const parsed = schema.safeParse(raw);
if (!parsed.success) {
  console.error('❌ Invalid environment variables:');
  console.error(JSON.stringify(parsed.error.flatten().fieldErrors, null, 2));
  process.exit(1);
}

export const env = parsed.data;

export const isProd = env.NODE_ENV === 'production';
export const googleEnabled = Boolean(env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET);
export const facebookEnabled = Boolean(env.FACEBOOK_APP_ID && env.FACEBOOK_APP_SECRET);
export const mailEnabled = Boolean((env.SMTP_HOST && env.SMTP_USER && env.SMTP_PASS));
/* Cloudinary configuration */
export interface CloudinaryConfig {
  cloudName: string;
  apiKey: string;
  apiSecret: string;
}

/** Parses cloudinary://<api_key>:<api_secret>@<cloud_name> */
const parseCloudinaryUrl = (value?: string): CloudinaryConfig | null => {
  if (!value) return null;
  try {
    const url = new URL(value);
    if (url.protocol !== 'cloudinary:') return null;

    const cloudName = url.hostname;
    const apiKey = decodeURIComponent(url.username);
    const apiSecret = decodeURIComponent(url.password);

    return cloudName && apiKey && apiSecret ? { cloudName, apiKey, apiSecret } : null;
  } catch {
    return null;
  }
};

const urlConfig = parseCloudinaryUrl(env.CLOUDINARY_URL);

if (env.CLOUDINARY_URL && !urlConfig) {
  console.warn(
    '⚠️ CLOUDINARY_URL is set but could not be read. Expected: cloudinary://<api_key>:<api_secret>@<cloud_name>',
  );
}

const separateConfig: CloudinaryConfig | null =
  env.CLOUDINARY_CLOUD_NAME && env.CLOUDINARY_API_KEY && env.CLOUDINARY_API_SECRET
    ? {
        cloudName: env.CLOUDINARY_CLOUD_NAME,
        apiKey: env.CLOUDINARY_API_KEY,
        apiSecret: env.CLOUDINARY_API_SECRET,
      }
    : null;

if (urlConfig && separateConfig) {
  const differing = (['cloudName', 'apiKey', 'apiSecret'] as const).filter(
    (key) => urlConfig[key] !== separateConfig[key],
  );
  if (differing.length > 0) {
    console.warn(
      `⚠️ CLOUDINARY_URL and the separate CLOUDINARY_* variables disagree on: ${differing.join(', ')}. ` +
        'Using CLOUDINARY_URL. Remove the separate variables to avoid confusion.',
    );
  }
}

/** CLOUDINARY_URL wins; the three separate variables are the fallback. */
export const cloudinaryConfig: CloudinaryConfig | null = urlConfig ?? separateConfig;
export const cloudinaryEnabled = cloudinaryConfig !== null;