'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { UserPlus } from 'lucide-react';
import { Alert } from '@/components/ui/Alert';
import { Button, buttonClasses } from '@/components/ui/Button';
import { PageSpinner } from '@/components/ui/Spinner';
import { useAuth } from '@/hooks/useAuth';
import { roleLabel, safeNext } from '@/lib/utils';
import { LoginForm } from './LoginForm';

/**
 * A login page cannot know who is looking at it until they sign in, so "Create account" is NOT part of the
 * login form. It appears only when this browser already holds a super admin session:
 *   - signed-out visitor      -> sign-in form, no create-account button
 *   - signed-in admin         -> sent straight to the dashboard
 *   - signed-in super admin   -> this panel, with the "Create account" button
 * (The API enforces who may create accounts, whatever the page shows.)
 */
export function LoginView() {
  const router = useRouter();
  const params = useSearchParams();
  const { status, user, logout } = useAuth();
  const next = safeNext(params.get('next'));

  useEffect(() => {
    if (status === 'authenticated' && user?.role === 'admin') router.replace(next);
  }, [status, user, router, next]);

  if (status === 'loading' || (status === 'authenticated' && user?.role === 'admin')) return <PageSpinner label="Checking your session" />;

  if (status === 'authenticated' && user?.role === 'super_admin') {
    return (
      <div className="space-y-6">
        <header>
          <h1 className="text-3xl font-semibold">You are signed in</h1>
          <p className="mt-2 text-ink-soft">
            {user.name} ({roleLabel(user.role)}) is already signed in on this device.
          </p>
        </header>
        <div className="flex flex-wrap gap-3">
          <Link href="/dashboard" className={buttonClasses('primary', 'lg')}>
            Continue to the dashboard
          </Link>
          <Link href="/signup" className={buttonClasses('outline', 'lg')}>
            <UserPlus className="size-4" />
            Create account
          </Link>
        </div>
        <Button variant="ghost" onClick={logout}>
          Sign out and use another account
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-7">
      <header>
        <h1 className="text-3xl font-semibold">Sign in</h1>
        <p className="mt-2 text-ink-soft">Use the e-mail and password for your admin account.</p>
      </header>
      {params.get('expired') && <Alert tone="info">Your session ended. Please sign in again.</Alert>}
      {params.get('reset') && <Alert tone="success">Your password was updated. Sign in with the new one.</Alert>}
      <LoginForm next={next} />
      <p className="text-sm text-ink-soft">Accounts are created by a super admin. Ask one if you need access.</p>
    </div>
  );
}
