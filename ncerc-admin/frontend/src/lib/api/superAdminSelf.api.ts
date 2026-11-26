import type { OtpInfo, User } from '@/types';
import { api } from './client';

/**
 * Routes you added for super admins in users.routes.ts:
 *   /api/admins/me/profile, /api/admins/me/change-password, /api/admins/super-admin/forgot-password...
 *
 * NOT used by the pages yet. The pages call the equivalent /api/auth/* routes (authApi), which already work
 * for super admins AND admins. The payloads below are ASSUMED to mirror those routes: I have not seen
 * your superAdminForgotPasswordSchema, superAdminResetPasswordSchema, updateOwnProfileSchema or
 * changeOwnPasswordSchema. Adjust the field names here once, then switch the pages over if you want to.
 */
export const superAdminSelfApi = {
  updateMyProfile: async (input: { name?: string; phone?: string; dateOfBirth?: string; avatar?: string }) =>
    (await api<{ user: User }>('/admins/me/profile', { method: 'PATCH', body: input })).data.user,

  changeMyPassword: (input: { currentPassword: string; newPassword: string }) =>
    api('/admins/me/change-password', { method: 'PATCH', body: input }),

  forgotPassword: async (email: string) =>
    (await api<OtpInfo>('/admins/super-admin/forgot-password', { method: 'POST', body: { email }, auth: false })).data,

  verifyForgotPasswordOtp: (input: { email: string; otp: string }) =>
    api('/admins/super-admin/forgot-password/verify-otp', { method: 'POST', body: input, auth: false }),

  resendForgotPasswordOtp: async (email: string) =>
    (await api<OtpInfo>('/admins/super-admin/forgot-password/resend-otp', { method: 'POST', body: { email }, auth: false })).data,

  /** ASSUMED body: adjust to superAdminResetPasswordSchema. */
  resetPassword: (input: { email: string; otp?: string; resetToken?: string; newPassword: string }) =>
    api('/admins/super-admin/reset-password', { method: 'POST', body: input, auth: false }),
};
