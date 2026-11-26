import type { Capabilities, OtpInfo, User } from '@/types';
import { api } from './client';

export interface UpdateProfileInput {
  name?: string;
  phone?: string;
  /** YYYY-MM-DD */
  dateOfBirth?: string;
}

/** Sign in, session, profile, password recovery. Backend: /api/auth/* */
export const authApi = {
  login: async (input: { email: string; password: string }) =>
    (await api<{ user: User; accessToken: string }>('/auth/login', { method: 'POST', body: input, auth: false })).data,

  logout: () => api('/auth/logout', { method: 'POST', auth: false }),

  getMe: async () => (await api<{ user: User; capabilities?: Capabilities }>('/auth/get-me')).data,

  /** Name, phone, date of birth, avatar only. The backend rejects e-mail, role and status. */
  updateMe: async (input: UpdateProfileInput) => (await api<{ user: User }>('/auth/update-me', { method: 'PATCH', body: input })).data.user,
  /** Uploads a new profile picture (JPG, PNG or WEBP). Sent as multipart/form-data, field name "image". */
  /** Uploads a new profile picture (JPG, PNG or WEBP). Sent as multipart/form-data, field name "image". */
  updateAvatar: async (file: File) => {
    const form = new FormData();
    form.append('image', file);
    return (await api<{ user: User }>('/auth/update-avatar', { method: 'PATCH', form })).data.user;
  },

  removeAvatar: async () => (await api<{ user: User }>('/auth/remove-avatar', { method: 'DELETE' })).data.user,
  /** Super admins only; admin accounts get 403 PASSWORD_MANAGED_BY_PRIMARY. */
  changeMyPassword: (input: { currentPassword: string; newPassword: string }) =>
    api('/auth/change-my-password', { method: 'PATCH', body: input }),

  // ----- forgot password: e-mail, 6-digit code, new password (works for admins and super admins) -----
  /** Always succeeds with the same answer, whether or not the e-mail has an account. Calling it again = resend. */
  forgotPassword: async (email: string) =>
    (await api<OtpInfo>('/auth/forgot-password', { method: 'POST', body: { email }, auth: false })).data,

  verifyResetOtp: async (input: { email: string; otp: string }) =>
    (await api<{ resetToken: string; expiresInSeconds: number }>('/auth/forgot-password/verify-otp', { method: 'POST', body: input, auth: false })).data,

  resetPassword: (token: string, password: string) =>
    api(`/auth/reset-password/${encodeURIComponent(token)}`, { method: 'POST', body: { password }, auth: false }),

  // ----- public self-signup (e-mail code, then super admin approval). The panel does not show it. -----
  signup: async (input: { name: string; email: string; phone?: string; password: string }) =>
    (await api<OtpInfo>('/auth/signup', { method: 'POST', body: input, auth: false })).data,

  verifySignupOtp: async (input: { email: string; otp: string }) =>
    (await api<{ status: 'pending' | 'active' }>('/auth/verify-otp', { method: 'POST', body: input, auth: false })).data,

  resendSignupOtp: async (email: string) =>
    (await api<OtpInfo>('/auth/resend-otp', { method: 'POST', body: { email }, auth: false })).data,
};
