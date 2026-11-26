'use client';
import Link from 'next/link';
import { buttonClasses } from '@/components/ui/Button';
import { useAuth } from '@/hooks/useAuth';

export function WelcomeActions() {
  const { status, user } = useAuth();
  const signedIn = status === 'authenticated';
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Link href={signedIn ? '/dashboard' : '/login'} className={buttonClasses('marker', 'lg')}>
        {signedIn ? 'Go to the dashboard' : 'Sign in'}
      </Link>
      {signedIn && user && <p className="text-sm text-ink-soft">Signed in as {user.name}</p>}
    </div>
  );
}
