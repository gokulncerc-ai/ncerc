'use client';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { authApi } from '@/lib/api/auth.api';
import { setSessionExpiredHandler } from '@/lib/api/client';
import { refreshSession } from '@/lib/auth/session';
import { tokenStore } from '@/lib/auth/tokenStore';
import type { Capabilities, User } from '@/types';

type Status = 'loading' | 'authenticated' | 'anonymous';

interface AuthContextValue {
  status: Status;
  user: User | null;
  capabilities: Capabilities | null;
  isSuperAdmin: boolean;
  /** The primary super admin (PRIMARY_SUPER_ADMIN_EMAIL on the backend). */
  isPrimary: boolean;
  login: (email: string, password: string) => Promise<User>;
  logout: () => Promise<void>;
  /** Reloads the profile (after the user edits it). */
  reload: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

/** Used only if the backend did not send "capabilities" (older backend). The backend still enforces everything. */
const fallbackCapabilities = (user: User): Capabilities => ({
  canEditProfile: true,
  canChangeEmail: false,
  canChangeRole: false,
  canChangeOwnPassword: user.role !== 'admin',
  canResetPasswordByEmail: true,
  canManageOtherPasswords: false,
  isPrimarySuperAdmin: false,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [state, setState] = useState<{ status: Status; user: User | null; capabilities: Capabilities | null }>({
    status: 'loading',
    user: null,
    capabilities: null,
  });

  const setSignedIn = useCallback((user: User, capabilities?: Capabilities) => {
    setState({ status: 'authenticated', user, capabilities: capabilities ?? fallbackCapabilities(user) });
  }, []);

  const setSignedOut = useCallback(() => {
    tokenStore.set(null);
    setState({ status: 'anonymous', user: null, capabilities: null });
  }, []);

  // Restore the session when the page loads: the httpOnly refresh cookie -> a fresh access token.
  useEffect(() => {
    let ignore = false;
    (async () => {
      const user = await refreshSession(); // overlapping calls (StrictMode) share one request
      if (ignore) return;
      if (!user) return setSignedOut();
      try {
        const me = await authApi.getMe();
        if (!ignore) setSignedIn(me.user, me.capabilities);
      } catch {
        if (!ignore) setSignedOut();
      }
    })();
    return () => {
      ignore = true;
    };
  }, [setSignedIn, setSignedOut]);

  // A request that could not be saved by a refresh sends the user to the login page.
  useEffect(() => {
    setSessionExpiredHandler(() => {
      setSignedOut();
      router.replace('/login?expired=1');
    });
    return () => setSessionExpiredHandler(null);
  }, [router, setSignedOut]);

  const login = useCallback(
    async (email: string, password: string) => {
      const { accessToken } = await authApi.login({ email, password });
      tokenStore.set(accessToken);
      try {
        const me = await authApi.getMe();
        setSignedIn(me.user, me.capabilities);
        return me.user;
      } catch (err) {
        tokenStore.set(null);
        throw err;
      }
    },
    [setSignedIn],
  );

  const logout = useCallback(async () => {
    try {
      await authApi.logout(); // the backend deletes the session and clears the cookie
    } catch {
      /* signing out locally is enough if the network is down */
    }
    setSignedOut();
    router.replace('/login');
  }, [router, setSignedOut]);

  const reload = useCallback(async () => {
    const me = await authApi.getMe();
    setSignedIn(me.user, me.capabilities);
  }, [setSignedIn]);

  const value = useMemo<AuthContextValue>(
    () => ({
      ...state,
      isSuperAdmin: state.user?.role === 'super_admin',
      isPrimary: state.capabilities?.isPrimarySuperAdmin ?? false,
      login,
      logout,
      reload,
    }),
    [state, login, logout, reload],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>');
  return ctx;
}
