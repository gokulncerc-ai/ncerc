import { RequestHandler } from 'express';
import { ApiError } from '../utils/ApiError';
import { hasPermission, Permission } from '../constants/permissions';

/** Use AFTER authenticate. The user must hold every listed permission. */
export const authorize =
  (...permissions: Permission[]): RequestHandler =>
  (req, _res, next) => {
    if (!req.user) return next(new ApiError(401, 'Authentication required'));
    const allowed = permissions.every((p) => hasPermission(req.user!.role, p));
    if (!allowed) return next(new ApiError(403, 'You do not have permission to do this'));
    next();
  };
