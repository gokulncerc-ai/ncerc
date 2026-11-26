'use client';
import { useState } from 'react';
import { Alert } from '@/components/ui/Alert';
import { Button } from '@/components/ui/Button';
import { PasswordField } from '@/components/ui/Fields';
import { useToast } from '@/context/ToastProvider';
import { useAuth } from '@/hooks/useAuth';
import { authApi } from '@/lib/api/auth.api';
import { errorMessage, fieldErrors } from '@/lib/api/client';

export function ChangePasswordForm() {
  const toast = useToast();
  const { capabilities } = useAuth();
  const [current, setCurrent] = useState('');
  const [next, setNext] = useState('');
  const [confirm, setConfirm] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState('');
  const [busy, setBusy] = useState(false);

  // Admin accounts: the backend refuses self-service changes, so the form is not even shown.
  if (capabilities && !capabilities.canChangeOwnPassword) {
    return (
      <div className="space-y-2 rounded-lg border border-rule bg-sheet p-6">
        <h2 className="text-xl font-semibold">Password</h2>
        <Alert tone="info">
          Passwords for admin accounts are managed by the primary super admin. If you cannot sign in, use <span className="font-semibold">Forgot password</span> on the sign-in page, or ask a super admin.
        </Alert>
      </div>
    );
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const local: Record<string, string> = {};
    if (!current) local.currentPassword = 'Enter your current password';
    if (next.length < 8) local.newPassword = 'Use at least 8 characters';
    else if (!/[A-Za-z]/.test(next) || !/\d/.test(next)) local.newPassword = 'Include at least one letter and one number';
    else if (next === current) local.newPassword = 'Choose a password different from the current one';
    if (confirm !== next) local.confirm = 'The two passwords do not match';
    setErrors(local);
    setFormError('');
    if (Object.keys(local).length) return;

    setBusy(true);
    try {
      await authApi.changeMyPassword({ currentPassword: current, newPassword: next });
      setCurrent('');
      setNext('');
      setConfirm('');
      toast.success('Password changed. Other devices were signed out.');
    } catch (err) {
      const fields = fieldErrors(err);
      setErrors(fields);
      setFormError(Object.keys(fields).length ? '' : errorMessage(err));
    } finally {
      setBusy(false);
    }
  };

  return (
    <form onSubmit={submit} noValidate className="space-y-5 rounded-lg border border-rule bg-sheet p-6">
      <h2 className="text-xl font-semibold">Change password</h2>
      {formError && <Alert tone="error">{formError}</Alert>}
      <PasswordField label="Current password" value={current} onChange={(e) => setCurrent(e.target.value)} error={errors.currentPassword} autoComplete="current-password" />
      <div className="grid gap-5 sm:grid-cols-2">
        <PasswordField label="New password" value={next} onChange={(e) => setNext(e.target.value)} error={errors.newPassword} autoComplete="new-password" hint="8+ characters, with a letter and a number." />
        <PasswordField label="Confirm new password" value={confirm} onChange={(e) => setConfirm(e.target.value)} error={errors.confirm} autoComplete="new-password" />
      </div>
      <Button type="submit" loading={busy}>
        Change password
      </Button>
    </form>
  );
}
