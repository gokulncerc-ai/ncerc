import type { AdminEvent, OtpInfo, Pagination, Role, User, UserStatus } from '@/types';
import { api } from './client';

export interface AdminListParams {
  status?: UserStatus;
  role?: Role;
  search?: string;
  page?: number;
  limit?: number;
}

export interface NewAccountInput {
  name: string;
  email: string;
  phone?: string;
  password: string;
}

export interface AdminDetails {
  user: User & { authMethods: string[] };
  events: { total: number; draft: number; published: number; archived: number };
}

export interface PasswordAuditEntry {
  id: string;
  targetEmail: string;
  targetRole: Role;
  changedByEmail: string;
  method: 'primary_set' | 'self_change' | 'forgot_reset';
  ip?: string;
  userAgent?: string;
  createdAt: string;
}

type Page<T> = { items: T[]; pagination: Pagination };
const page = async <T,>(p: Promise<{ data: T[]; pagination?: Pagination }>): Promise<Page<T>> => {
  const res = await p;
  return { items: res.data, pagination: res.pagination! };
};

/** Account management. Backend: /api/admins/* (super admins only; some routes primary only). */
export const adminsApi = {
  // ----- lists -----
  list: (params: AdminListParams = {}) => page<User>(api<User[]>('/admins/list', { query: { ...params } })),
  listPending: (params: { search?: string; page?: number; limit?: number } = {}) =>
    page<User>(api<User[]>('/admins/pending-admins', { query: { ...params } })),
  listActive: (params: { search?: string; page?: number; limit?: number } = {}) =>
    page<User>(api<User[]>('/admins/active-admins', { query: { ...params } })),
  getDetails: async (id: string) => (await api<AdminDetails>(`/admins/${id}/get-admin-details`)).data,

  // ----- admins -----
  /** Creates an ACTIVE admin at once (no code, no approval) and e-mails a welcome notice. */
  createAdmin: async (input: NewAccountInput) => (await api<{ user: User }>('/admins/create', { method: 'POST', body: input })).data.user,
  approve: async (id: string) => (await api<{ user: User }>(`/admins/${id}/approve`, { method: 'PATCH' })).data.user,
  suspend: async (id: string) => (await api<{ user: User }>(`/admins/${id}/suspend`, { method: 'PATCH' })).data.user,
  remove: (id: string) => api(`/admins/${id}/remove-admin`, { method: 'DELETE' }),

  // ----- super admins: e-mail code first, the account exists only after the code is verified -----
  startSuperAdmin: async (input: NewAccountInput) => (await api<OtpInfo>('/admins/create-super-admin', { method: 'POST', body: input })).data,
  verifySuperAdmin: async (input: { email: string; otp: string }) =>
    (await api<{ user: User }>('/admins/create-super-admin/verify-otp', { method: 'POST', body: input })).data.user,
  resendSuperAdmin: async (email: string) => (await api<OtpInfo>('/admins/create-super-admin/resend-otp', { method: 'POST', body: { email } })).data,

  // ----- primary super admin only -----
  managePassword: (id: string, newPassword: string) => api(`/admins/${id}/manage-password`, { method: 'PATCH', body: { newPassword } }),
  passwordAudit: (params: { userId?: string; page?: number; limit?: number } = {}) =>
    page<PasswordAuditEntry>(api<PasswordAuditEntry[]>('/admins/password-audit', { query: { ...params } })),
};

export type { AdminEvent };
