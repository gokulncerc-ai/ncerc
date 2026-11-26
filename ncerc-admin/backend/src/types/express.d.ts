import type { Role, UserStatus } from '../constants/roles';

declare global {
  namespace Express {
    // req.user (set by the authenticate middleware, and by passport in OAuth callbacks)
    interface User {
      id: string;
      name: string;
      email: string;
      role: Role;
      status: UserStatus;
    }
    interface Request {
      sessionId?: string;
    }
  }
}

export {};
