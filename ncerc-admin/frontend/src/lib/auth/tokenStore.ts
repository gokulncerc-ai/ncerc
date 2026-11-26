/**
 * The access token lives ONLY in memory (never localStorage), so a script injected into the page cannot
 * steal a long-lived credential. A page reload loses it; refreshSession() gets a new one from the
 * httpOnly refresh cookie.
 */
let accessToken: string | null = null;

export const tokenStore = {
  get: (): string | null => accessToken,
  set: (token: string | null): void => {
    accessToken = token;
  },
};
