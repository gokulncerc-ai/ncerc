import { z } from 'zod';
import { env } from '../../config/env';

export const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .max(72, 'Password must be at most 72 characters')
  .regex(/[A-Za-z]/, 'Password must contain a letter')
  .regex(/\d/, 'Password must contain a number');

const email = z.string().trim().toLowerCase().email('Enter a valid email');

/** Optional. Spaces, dashes and brackets are removed; "+919876543210" and "9876543210" both pass. */
export const phoneSchema = z.preprocess(
  (v) => (typeof v === 'string' ? v.replace(/[\s()-]/g, '') || undefined : v),
  z
    .string()
    .regex(/^\+?[1-9]\d{6,14}$/, 'Enter a valid phone number, for example +919876543210')
    .optional(),
);

export const signupSchema = {
  body: z.object({
    name: z.string().trim().min(2, 'Name is too short').max(80),
    email,
    phone: phoneSchema,
    password: passwordSchema,
  }),
};

const otp = z
  .string()
  .trim()
  .regex(new RegExp(`^\\d{${env.OTP_LENGTH}}$`), `Enter the ${env.OTP_LENGTH}-digit code`);

export const verifyOtpSchema = { body: z.object({ email, otp }) };
export const resendOtpSchema = { body: z.object({ email }) };

export const loginSchema = {
  body: z.object({ email, password: z.string().min(1, 'Password is required') }),
};

export const forgotPasswordSchema = { body: z.object({ email }) };

export const resetPasswordSchema = {
  params: z.object({ token: z.string().min(20) }),
  body: z.object({ password: passwordSchema }),
};

/** "1995-04-12" -> a real calendar date between 1900 and today, stored as UTC midnight. */
const dateOfBirthSchema = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, 'Use the format YYYY-MM-DD')
  .transform((value, ctx) => {
    const date = new Date(`${value}T00:00:00.000Z`);
    const isRealDate = !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value; // rejects 1995-02-30
    if (!isRealDate || date.getUTCFullYear() < 1900 || date.getTime() > Date.now()) {
      ctx.addIssue({ code: 'custom', message: 'Enter a valid date of birth (not in the future)' });
      return z.NEVER;
    }
    return date;
  });

/**
 * Profile fields a user may edit about THEMSELVES. E-mail and role are not here and cannot be sent:
 * .strict() makes the API answer 422 instead of silently ignoring them.
 */
export const updateProfileSchema = {
  body: z
    .object({
      name: z.string().trim().min(2).max(80).optional(),
      phone: phoneSchema,
      dateOfBirth: dateOfBirthSchema.optional(),
    })
    .strict('Only name, phone and dateOfBirth can be changed here (e-mail and role cannot be changed). Use /update-avatar for the picture.')
    .refine((v) => Object.keys(v).length > 0, 'Nothing to update'),
};

export const changePasswordSchema = {
  body: z
    .object({
      currentPassword: z.string().optional(), // not required for social-only accounts setting a first password
      newPassword: passwordSchema,
    })
    .refine((v) => !v.currentPassword || v.currentPassword !== v.newPassword, {
      message: 'New password must be different from the current password',
      path: ['newPassword'],
    }),
};
