import bcrypt from 'bcryptjs';

const ROUNDS = 12;

export const hashPassword = (plain: string): Promise<string> => bcrypt.hash(plain, ROUNDS);
export const comparePassword = (plain: string, hash: string): Promise<boolean> =>
  bcrypt.compare(plain, hash);

// used to keep login timing similar when the email does not exist
export const DUMMY_HASH = bcrypt.hashSync('not-a-real-password', ROUNDS);
