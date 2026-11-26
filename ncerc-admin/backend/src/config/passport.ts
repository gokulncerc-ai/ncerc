import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import type { Profile } from 'passport';
import { env, googleEnabled, facebookEnabled } from './env';
import { User } from '../modules/users/user.model';
import { ROLES, USER_STATUS } from '../constants/roles';

type Provider = 'google' | 'facebook';

/**
 * - existing social id        -> that user
 * - existing user with email  -> link the provider to it
 * - otherwise                 -> create a PENDING admin (super admin must approve)
 */
const findOrCreateSocialUser = async (provider: Provider, profile: Profile) => {
  const idField = provider === 'google' ? 'googleId' : 'facebookId';
  const email = profile.emails?.[0]?.value?.toLowerCase();
  const avatar = profile.photos?.[0]?.value;

  let user = await User.findOne({ [idField]: profile.id });
  if (user) return user;

  if (!email) throw new Error(`${provider} account did not share an email address`);

  user = await User.findOne({ email });
  if (user) {
    user.set(idField, profile.id);
    if (!user.avatar && avatar) user.avatar = avatar;
    await user.save();
    return user;
  }

  return User.create({
    name: profile.displayName || email.split('@')[0],
    email,
    [idField]: profile.id,
    avatar,
    role: ROLES.ADMIN,
    status: USER_STATUS.PENDING,
  });
};

export const configurePassport = (): void => {
  if (googleEnabled) {
    passport.use(
      new GoogleStrategy(
        {
          clientID: env.GOOGLE_CLIENT_ID!,
          clientSecret: env.GOOGLE_CLIENT_SECRET!,
          callbackURL: `${env.BACKEND_URL}/api/auth/google/callback`,
        },
        async (_at, _rt, profile, done) => {
          try {
            done(null, (await findOrCreateSocialUser('google', profile)) as unknown as Express.User);
          } catch (err) {
            done(err as Error);
          }
        },
      ),
    );
  }

  if (facebookEnabled) {
    passport.use(
      new FacebookStrategy(
        {
          clientID: env.FACEBOOK_APP_ID!,
          clientSecret: env.FACEBOOK_APP_SECRET!,
          callbackURL: `${env.BACKEND_URL}/api/auth/facebook/callback`,
          profileFields: ['id', 'displayName', 'emails', 'photos'],
        },
        async (_at, _rt, profile, done) => {
          try {
            done(null, (await findOrCreateSocialUser('facebook', profile)) as unknown as Express.User);
          } catch (err) {
            done(err as Error);
          }
        },
      ),
    );
  }
};
