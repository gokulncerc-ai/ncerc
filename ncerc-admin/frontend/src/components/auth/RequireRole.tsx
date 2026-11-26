'use client';
import Link from 'next/link';
import { ShieldAlert } from 'lucide-react';
import { buttonClasses } from '@/components/ui/Button';
import { useAuth } from '@/hooks/useAuth';

/** Shows a clear "not allowed" page instead of a blank screen when an admin opens a super-admin page. */
export function RequireRole({ role, primaryOnly, children }: { role: 'super_admin'; primaryOnly?: boolean; children: React.ReactNode }) {
  const { user, isPrimary } = useAuth();
  const allowed = user?.role === role && (!primaryOnly || isPrimary);
  if (allowed) return <>{children}</>;

  return (
    <div className="mx-auto mt-16 max-w-md rounded-lg border border-rule bg-sheet p-8 text-center">
      <ShieldAlert className="mx-auto size-10 text-marker-deep" strokeWidth={1.5} />
      <h1 className="mt-4 text-2xl font-semibold">This page is for super admins</h1>
      <p className="mt-2 text-ink-soft">Your account does not have access to it. If you need something changed, ask a super admin.</p>
      <Link href="/dashboard" className={buttonClasses('primary', 'md', 'mt-6')}>
        Back to the dashboard
      </Link>
    </div>
  );
}
