import { env } from '../config/env';
import { Role, ROLES, USER_STATUS } from '../constants/roles';
import { User } from '../modules/users/user.model';
import { ApiError } from './ApiError';
import { log, maskEmail } from './logger';

interface AccountLike {
  email: string;
  role: Role;
}

/**
 * The PRIMARY super admin is the account whose e-mail equals PRIMARY_SUPER_ADMIN_EMAIL (.env) and whose
 * role is super_admin. It is fixed in configuration, so it can never change by accident (a re-seeded
 * database, a deleted account, an older test user). Nobody can change anyone's e-mail through the API,
 * and the e-mail is unique, so no other account can ever hold it.
 * No database query is needed: authenticate has already loaded the user's current e-mail and role.
 */
export const isPrimarySuperAdmin = (user: AccountLike): boolean =>
  user.role === ROLES.SUPER_ADMIN && user.email.trim().toLowerCase() === env.PRIMARY_SUPER_ADMIN_EMAIL;

/** Throws 403 unless this account is the primary super admin. */
export const assertPrimarySuperAdmin = (user: AccountLike): void => {
  if (!isPrimarySuperAdmin(user)) {
    throw new ApiError(403, 'Only the primary super admin can do this', { code: 'PRIMARY_ONLY' });
  }
};

/** Startup check: fails SAFE. If the account is missing, nobody can manage other people's passwords. */
export const logPrimarySuperAdmin = async (): Promise<void> => {
  const configured = maskEmail(env.PRIMARY_SUPER_ADMIN_EMAIL);
  const account = await User.findOne({ email: env.PRIMARY_SUPER_ADMIN_EMAIL }).select('role status');

  if (!account) {
    log.warn('admins', `Primary super admin ${configured} does not exist yet. Create it: pnpm seed:super-admin --email ${env.PRIMARY_SUPER_ADMIN_EMAIL} ... (until then nobody can set other people's passwords)`);
  } else if (account.role !== ROLES.SUPER_ADMIN || account.status !== USER_STATUS.ACTIVE) {
    log.error('admins', `PRIMARY_SUPER_ADMIN_EMAIL ${configured} exists but is "${account.role}" / "${account.status}", not an active super admin. Password management is disabled.`);
  } else {
    log.info('admins', `Primary super admin: ${configured}`);
  }
};
