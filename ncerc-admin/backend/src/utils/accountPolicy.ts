import { Role, ROLES } from '../constants/roles';
import { isPrimarySuperAdmin } from './primaryAdmin';

/**
 * ONE place that says what an account may do to ITSELF, shared by the services (enforcement) and by
 * GET /api/auth/get-me (so the frontend shows exactly what the backend will accept).
 *
 *   admin          edits name / phone / date of birth / avatar.  Cannot change e-mail, role or password.
 *                  A forgotten password is recovered with the e-mail code; the primary super admin can also set it.
 *   super admin    same profile fields, and may change their own password.
 *   primary        as a super admin, plus sets other people's passwords.
 */
export const canChangeOwnPassword = (role: Role): boolean => role !== ROLES.ADMIN;

export const accountCapabilities = (user: { email: string; role: Role }) => ({
  canEditProfile: true, // name, phone, dateOfBirth, avatar
  canChangeEmail: false, // nobody
  canChangeRole: false, // nobody (only the server-side seed script with --promote)
  canChangeOwnPassword: canChangeOwnPassword(user.role),
  canResetPasswordByEmail: true, // forgot-password with the e-mail code
  canManageOtherPasswords: isPrimarySuperAdmin(user),
  isPrimarySuperAdmin: isPrimarySuperAdmin(user),
});
