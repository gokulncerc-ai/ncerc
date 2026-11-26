import type { Metadata } from 'next';
import { Suspense } from 'react';
import { LoginView } from '@/components/auth/LoginView';
import { PageSpinner } from '@/components/ui/Spinner';

export const metadata: Metadata = { title: 'Sign in' };

export default function LoginPage() {
  return (
    <Suspense fallback={<PageSpinner />}>
      <LoginView />
    </Suspense>
  );
}
