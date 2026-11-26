import { RequestHandler } from 'express';
import { ApiError } from '../utils/ApiError';
import { assertPrimarySuperAdmin } from '../utils/primaryAdmin';

/** Use AFTER authenticate. Only the primary super admin (PRIMARY_SUPER_ADMIN_EMAIL) may continue. */
export const requirePrimarySuperAdmin: RequestHandler = (req, _res, next) => {
  if (!req.user) return next(new ApiError(401, 'Authentication required'));
  try {
    assertPrimarySuperAdmin(req.user);
    next();
  } catch (err) {
    next(err);
  }
};
