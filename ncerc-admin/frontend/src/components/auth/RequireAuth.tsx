'use client';
import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { PageSpinner } from '@/components/ui/Spinner';
import { useAuth } from '@/hooks/useAuth';

/**
 * Keeps signed-out visitors out of the dashboard pages. This is a CLIENT-side guard: the refresh cookie
 * belongs to the API's address, so Next.js middleware on this site cannot see it. It is only a convenience;
 * the API checks the token on every request.
 */
export function RequireAuth({ children }: { children: React.ReactNode }) {
  const { status } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (status === 'anonymous') router.replace(`/login?next=${encodeURIComponent(pathname)}`);
  }, [status, router, pathname]);

  if (status !== 'authenticated') {
    return (
      <div className="flex min-h-dvh items-center justify-center">
        <PageSpinner label={status === 'loading' ? 'Opening your workspace' : 'Redirecting to sign in'} />
      </div>
    );
  }
  return <>{children}</>;
}
