import { parseArgs } from 'node:util';
import { z } from 'zod';
import { connectDB, disconnectDB } from '../config/db';
import { env } from '../config/env';
import { ROLES, USER_STATUS } from '../constants/roles';
import { passwordSchema, phoneSchema } from '../modules/auth/auth.validation';
import { User } from '../modules/users/user.model';
import { hashPassword } from '../utils/password';
import { isPrimarySuperAdmin } from '../utils/primaryAdmin';

/**
 * Creates a super admin directly in the database. It runs on YOUR computer / server, not over HTTP,
 * so it needs no login token and is not exposed to the internet.
 *
 *   pnpm seed:super-admin                                   uses SEED_SUPER_ADMIN_* from .env
 *   pnpm seed:super-admin --name "Shabeer" --email you@example.com --phone 9645526863 --password "Test@123"
 *   pnpm seed:super-admin --email existing-admin@example.com --promote     turns an existing account into a super admin
 *
 * Command-line values win over .env. Optional .env key: SEED_SUPER_ADMIN_PHONE.
 */

const inputSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(80),
  email: z.string().trim().toLowerCase().email('Enter a valid email'),
  phone: phoneSchema, // optional
  password: passwordSchema, // 8-72 characters, at least one letter and one number
});
export type SeedInput = z.infer<typeof inputSchema>;

export type SeedResult = 'created' | 'promoted' | 'unchanged' | 'blocked';

const text = (v: unknown): string | undefined => (typeof v === 'string' && v.trim() !== '' ? v : undefined);

/** Reads command-line flags first, then .env. Returns validation messages instead of throwing. */
export const readInput = (argv: string[]) => {
  const { values } = parseArgs({
    args: argv,
    allowPositionals: true, // tolerates a stray "--"
    strict: false,
    options: {
      name: { type: 'string' },
      email: { type: 'string' },
      phone: { type: 'string' },
      password: { type: 'string' },
      promote: { type: 'boolean' },
    },
  });

  const parsed = inputSchema.safeParse({
    name: text(values.name) ?? env.SEED_SUPER_ADMIN_NAME,
    email: text(values.email) ?? env.SEED_SUPER_ADMIN_EMAIL ?? env.PRIMARY_SUPER_ADMIN_EMAIL,
    phone: text(values.phone) ?? process.env.SEED_SUPER_ADMIN_PHONE,
    password: text(values.password) ?? env.SEED_SUPER_ADMIN_PASSWORD,
  });

  const promote = values.promote === true;
  if (parsed.success) return { ok: true as const, input: parsed.data, promote };

  const problems = parsed.error.issues.map((i) => `  - ${i.path.join('.') || 'input'}: ${i.message}`);
  return { ok: false as const, problems, promote };
};

/** The actual work; kept separate from the command line so it can be tested. */
export const seedSuperAdmin = async (
  input: SeedInput,
  options: { promote: boolean },
): Promise<{ result: SeedResult; message: string }> => {
  const existing = await User.findOne({ email: input.email });

  if (!existing) {
    const created = await User.create({
      name: input.name,
      email: input.email,
      phone: input.phone,
      passwordHash: await hashPassword(input.password),
      role: ROLES.SUPER_ADMIN,
      status: USER_STATUS.ACTIVE,
    });

    // The PRIMARY super admin is the account named in PRIMARY_SUPER_ADMIN_EMAIL (.env).
    const note = isPrimarySuperAdmin(created)
      ? '   👑 This is the PRIMARY super admin (the only account that can set other people\'s passwords).'
      : `   ℹ️  Not the primary super admin. The primary is ${env.PRIMARY_SUPER_ADMIN_EMAIL} (PRIMARY_SUPER_ADMIN_EMAIL in .env).`;
    return { result: 'created', message: `✅ Super admin created: ${input.email}\n${note}` };
  }

  if (existing.role === ROLES.SUPER_ADMIN && existing.status === USER_STATUS.ACTIVE) {
    return { result: 'unchanged', message: `ℹ️  ${input.email} is already an active super admin. Nothing changed.` };
  }

  if (!options.promote) {
    return {
      result: 'blocked',
      message:
        `⚠️  ${input.email} already exists as "${existing.role}" (status: ${existing.status}), so nothing was changed.\n` +
        '   To turn this account into an active super admin, run the same command with --promote.',
    };
  }

  existing.role = ROLES.SUPER_ADMIN;
  existing.status = USER_STATUS.ACTIVE;
  if (!existing.phone && input.phone) existing.phone = input.phone;
  await existing.save();
  return { result: 'promoted', message: `✅ ${input.email} is now an active super admin (existing password kept).` };
};

const main = async () => {
  const read = readInput(process.argv.slice(2));
  if (!read.ok) {
    console.error('❌ Cannot create the super admin:');
    read.problems.forEach((p) => console.error(p));
    console.error('\nPass values with --name --email --phone --password, or set SEED_SUPER_ADMIN_* in .env.');
    process.exit(1);
  }

  await connectDB();
  try {
    const { result, message } = await seedSuperAdmin(read.input, { promote: read.promote });
    console.log(message);
    if (result === 'created') console.log('   Log in with POST /api/auth/login, then change the password from the profile page.');
    if (result === 'blocked') process.exitCode = 1;
  } finally {
    await disconnectDB();
  }
};

// run only when started from the command line (not when imported by a test)
if (require.main === module) {
  main().catch(async (err) => {
    console.error(err);
    await disconnectDB();
    process.exit(1);
  });
}
