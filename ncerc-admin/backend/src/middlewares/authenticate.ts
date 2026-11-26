import { asyncHandler } from '../utils/asyncHandler';
import { ApiError } from '../utils/ApiError';
import { verifyAccessToken } from '../utils/jwt';
import { User } from '../modules/users/user.model';
import { Session } from '../modules/auth/session.model';
import { USER_STATUS } from '../constants/roles';

/** Verifies the Bearer access token, then confirms the user is still active and the session still exists. */
export const authenticate = asyncHandler(async (req, _res, next) => {
  const header = req.headers.authorization;
  if (!header?.startsWith('Bearer ')) throw new ApiError(401, 'Authentication required');
  let payload;
  try {
    payload = verifyAccessToken(header.slice(7));
  } catch {
    throw new ApiError(401, 'Access token is invalid or expired');
  }

  const [user, sessionExists] = await Promise.all([
    User.findById(payload.sub).select('name email role status'),
    Session.exists({ _id: payload.sid, userId: payload.sub }),
  ]);

  if (!user || !sessionExists) throw new ApiError(401, 'Session is no longer valid');
  if (user.status !== USER_STATUS.ACTIVE) throw new ApiError(403, `Account is ${user.status}`);

  req.user = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    status: user.status,
  };
  req.sessionId = payload.sid;
  next();
});
