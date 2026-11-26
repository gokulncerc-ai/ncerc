import crypto from 'crypto';

/** Random opaque token (given to the client) */
export const generateToken = (bytes = 48): string => crypto.randomBytes(bytes).toString('hex');

/** Only the hash is stored in the DB, so a leaked DB cannot be used to log in. */
export const hashToken = (token: string): string =>
  crypto.createHash('sha256').update(token).digest('hex');
