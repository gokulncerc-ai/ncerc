export type Role = 'super_admin' | 'admin';
export type UserStatus = 'pending' | 'active' | 'suspended';
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  dateOfBirth?: string;
  role: Role;
  status: UserStatus;
  avatar?: string;
  lastLoginAt?: string;
  passwordChangedAt?: string;
  superAdminId?: string | null;
  createdAt: string;
  updatedAt: string;
}
/** What the backend will accept for the signed-in account (GET /api/auth/get-me). */
export interface Capabilities {
  canEditProfile: boolean;
  canChangeEmail: boolean;
  canChangeRole: boolean;
  canChangeOwnPassword: boolean;
  canResetPasswordByEmail: boolean;
  canManageOtherPasswords: boolean;
  isPrimarySuperAdmin: boolean;
}
export type EventType = 'news' | 'event';
export type EventStatus = 'draft' | 'published' | 'archived';
export interface ImageRef {
  url: string;
  publicId?: string;
}
/** Only super admins receive createdBy / updatedBy. */
export interface PersonRef {
  _id?: string;
  id?: string;
  name: string;
  email: string;
}
export interface AdminEvent {
  id: string;
  title: string;
  slug: string;
  type: EventType;
  summary: string;
  description: string;
  coverImage?: ImageRef | null;
  gallery: ImageRef[];
  venue?: string;
  eventDate?: string | null;
  endDate?: string | null;
  registrationUrl?: string;
  status: EventStatus;
  isFeatured: boolean;
  publishedAt?: string | null;
  createdAt: string;
  updatedAt: string;
  canEdit: boolean;
  createdBy?: PersonRef | null;
  updatedBy?: PersonRef | null;
}
export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}
/** Every backend response has this shape. */
export interface Envelope<T> {
  success: boolean;
  message?: string;
  data: T;
  pagination?: Pagination;
  details?: unknown;
}
/** Returned when a verification code is e-mailed. */
export interface OtpInfo {
  email: string;
  expiresInSeconds: number;
  resendAfterSeconds: number;
  expiresAt: string;
  resendAvailableAt: string;
}
