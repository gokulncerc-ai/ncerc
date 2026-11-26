import { ROLES, Role } from './roles';

export const PERMISSIONS = {
  ADMINS_MANAGE: 'admins:manage', // add / approve / suspend / remove admins
  EVENTS_CREATE: 'events:create',
  EVENTS_READ: 'events:read', // view the admin events list / details
  EVENTS_MANAGE_OWN: 'events:manage:own', // edit, publish, delete own events
  EVENTS_MANAGE_ANY: 'events:manage:any', // edit, publish, delete anybody's events
  EVENTS_VIEW_AUDIT: 'events:view:audit', // see createdBy / updatedBy
  UPLOADS_CREATE: 'uploads:create',
  DASHBOARD_VIEW: 'dashboard:view',
} as const;

export type Permission = (typeof PERMISSIONS)[keyof typeof PERMISSIONS];

const P = PERMISSIONS;

export const ROLE_PERMISSIONS: Record<Role, readonly Permission[]> = {
  [ROLES.SUPER_ADMIN]: [
    P.ADMINS_MANAGE,
    P.EVENTS_CREATE,
    P.EVENTS_READ,
    P.EVENTS_MANAGE_OWN,
    P.EVENTS_MANAGE_ANY,
    P.EVENTS_VIEW_AUDIT,
    P.UPLOADS_CREATE,
    P.DASHBOARD_VIEW,
  ],
  [ROLES.ADMIN]: [
    P.EVENTS_CREATE,
    P.EVENTS_READ, // admins can SEE all events, but only change their own
    P.EVENTS_MANAGE_OWN,
    P.UPLOADS_CREATE,
    P.DASHBOARD_VIEW,
  ],
};

export const hasPermission = (role: Role, permission: Permission): boolean =>
  ROLE_PERMISSIONS[role]?.includes(permission) ?? false;
