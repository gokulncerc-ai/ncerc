'use client';
import { useState } from 'react';
import { ConfirmDialog } from '@/components/ui/ConfirmDialog';
import { PasswordField } from '@/components/ui/Fields';
import { Alert } from '@/components/ui/Alert';
import { useToast } from '@/context/ToastProvider';
import { adminsApi } from '@/lib/api/admins.api';
import { errorMessage, fieldErrors } from '@/lib/api/client';
import type { User } from '@/types';

/** Primary super admin only: sets another account's password. The person is signed out and told by e-mail. */
export function SetPasswordModal({ target, onClose }: { target: User | null; onClose: () => void }) {
  const toast = useToast();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const close = () => {
    setPassword('');
    setError('');
    onClose();
  };

  const save = async () => {
    if (!target) return;
    if (password.length < 8 || !/[A-Za-z]/.test(password) || !/\d/.test(password)) {
      return setError('Use at least 8 characters, with a letter and a number.');
    }
    setBusy(true);
    setError('');
    try {
      await adminsApi.managePassword(target.id, password);
      toast.success(`Password updated for ${target.name}. They were signed out and notified by e-mail.`);
      close();
    } catch (err) {
      setError(fieldErrors(err).newPassword ?? errorMessage(err));
    } finally {
      setBusy(false);
    }
  };

  return (
    <ConfirmDialog
      open={!!target}
      title={`Set a new password for ${target?.name ?? ''}`}
      description="They will be signed out on every device and sent an e-mail about the change. Each change is recorded in the audit trail."
      confirmLabel="Set password"
      loading={busy}
      onConfirm={save}
      onCancel={close}
    >
      <div className="space-y-3">
        <PasswordField label="New password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" autoFocus />
        {error && <Alert tone="error">{error}</Alert>}
      </div>
    </ConfirmDialog>
  );
}
