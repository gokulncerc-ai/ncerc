'use client';
import { RequireRole } from '@/components/auth/RequireRole';
import { CreateAccountForm } from '@/components/account/CreateAccountForm';
import { PageHeader } from '@/components/layout/PageHeader';

export default function SignupPage() {
  return (
    <RequireRole role="super_admin">
      <PageHeader title="Create an account" description="New accounts are created by super admins only. The person can sign in as soon as the account exists." />
      <CreateAccountForm />
    </RequireRole>
  );
}
