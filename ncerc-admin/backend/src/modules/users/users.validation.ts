import { z } from 'zod';
import { ROLES, USER_STATUS_VALUES } from '../../constants/roles';
import { idParamSchema, objectIdSchema } from '../../utils/objectId';
import { passwordSchema, phoneSchema } from '../auth/auth.validation';

export const listAdminsSchema = {
  query: z.object({
    status: z.enum(USER_STATUS_VALUES as [string, ...string[]]).optional(),
    role: z.enum([ROLES.ADMIN, ROLES.SUPER_ADMIN]).default(ROLES.ADMIN), // ?role=super_admin lists super admins
    search: z.string().trim().max(100).optional(),
    page: z.coerce.number().int().min(1).default(1),
    limit: z.coerce.number().int().min(1).max(100).default(20),
  }),
};
export type ListAdminsQuery = z.infer<typeof listAdminsSchema.query>;

/** search + paging; shared by the pending list and the active list. */
export const adminPageQuerySchema = {
  query: z.object({
    search: z.string().trim().max(100).optional(),
    page: z.coerce.number().int().min(1).default(1),
    limit: z.coerce.number().int().min(1).max(100).default(20),
  }),
};
export type AdminPageQuery = z.infer<typeof adminPageQuerySchema.query>;

const accountFields = {
  name: z.string().trim().min(2, 'Name is too short').max(80),
  email: z.string().trim().toLowerCase().email('Enter a valid email'),
  phone: phoneSchema, // optional
  password: passwordSchema,
};

export const createAdminSchema = { body: z.object(accountFields) };

/** Same fields; used for the OTP-verified super admin creation. */
export const createSuperAdminSchema = { body: z.object(accountFields) };

/** Primary super admin sets another account's password: PATCH /api/admins/:id/manage-password */
export const managePasswordSchema = {
  params: idParamSchema,
  body: z.object({ newPassword: passwordSchema }),
};

/** Primary super admin reads the password-change history: GET /api/admins/password-audit?userId= */
export const passwordAuditQuerySchema = {
  query: z.object({
    userId: objectIdSchema.optional(), // only changes made to this account
    page: z.coerce.number().int().min(1).default(1),
    limit: z.coerce.number().int().min(1).max(100).default(20),
  }),
};
export type PasswordAuditQuery = z.infer<typeof passwordAuditQuerySchema.query>;

/* ---------- super admin: forgot password (public) ---------- */
const emailField = z.string().trim().toLowerCase().email('Enter a valid email');

/** POST /api/admins/super-admin/forgot-password */
export const superAdminForgotPasswordSchema = { body: z.object({ email: emailField }) };

/** POST /api/admins/super-admin/reset-password (the token comes from the verify-otp step) */
export const superAdminResetPasswordSchema = {
  body: z.object({
    resetToken: z.string().trim().regex(/^[a-f0-9]{64}$/i, 'Invalid reset token'),
    newPassword: passwordSchema,
  }),
};

/* ---------- super admin: own account (logged in) ---------- */

/** PATCH /api/admins/me/change-password */
export const changeOwnPasswordSchema = {
  body: z
    .object({
      currentPassword: z.string().min(1, 'Enter your current password').max(128),
      newPassword: passwordSchema,
    })
    .refine((b) => b.currentPassword !== b.newPassword, {
      message: 'New password must be different from the current password',
      path: ['newPassword'],
    }),
};

/** PATCH /api/admins/me/profile : send only the fields you want to change (null clears phone / avatar) */
export const updateOwnProfileSchema = {
  body: z
    .object({
      name: z.string().trim().min(2, 'Name is too short').max(80).optional(),
      phone: phoneSchema.or(z.null()),
      avatar: z.string().trim().url('Enter a valid image URL').max(500).or(z.null()).optional(),
    })
    .refine((b) => b.name !== undefined || b.phone !== undefined || b.avatar !== undefined, {
      message: 'Provide at least one field to update',
    }),
};
export type UpdateOwnProfileInput = z.infer<typeof updateOwnProfileSchema.body>;