'use client';
import { useState } from 'react';
import { Alert } from '@/components/ui/Alert';
import { Button } from '@/components/ui/Button';
import { TextField } from '@/components/ui/Fields';
import { useToast } from '@/context/ToastProvider';
import { useAuth } from '@/hooks/useAuth';
import { authApi } from '@/lib/api/auth.api';
import { errorMessage, fieldErrors } from '@/lib/api/client';
import { roleLabel, toDateInput } from '@/lib/utils';

/** Name, phone and date of birth. E-mail and account type are shown but cannot be changed (the API refuses them). */
export function ProfileForm() {
  const toast = useToast();
  const { user, reload } = useAuth();
  const [name, setName] = useState(user?.name ?? '');
  const [phone, setPhone] = useState(user?.phone ?? '');
  const [dob, setDob] = useState(toDateInput(user?.dateOfBirth));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const local: Record<string, string> = {};
    if (name.trim().length < 2) local.name = 'Enter your full name';
    if (phone.trim() && !/^\+?[1-9]\d{6,14}$/.test(phone.replace(/[\s()-]/g, ''))) local.phone = 'Enter a valid phone number, for example +919876543210';
    if (dob && new Date(dob) > new Date()) local.dateOfBirth = 'Date of birth cannot be in the future';
    setErrors(local);
    setFormError('');
    if (Object.keys(local).length) return;

    setBusy(true);
    try {
      await authApi.updateMe({ name: name.trim(), ...(phone.trim() ? { phone: phone.trim() } : {}), ...(dob ? { dateOfBirth: dob } : {}) });
      await reload();
      toast.success('Profile saved.');
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
      <h2 className="text-xl font-semibold">Your details</h2>
      {formError && <Alert tone="error">{formError}</Alert>}
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField label="E-mail" value={user?.email ?? ''} readOnly disabled hint="Your e-mail cannot be changed." />
        <TextField label="Account type" value={user ? roleLabel(user.role) : ''} readOnly disabled hint="Fixed for this account." />
      </div>
      <TextField label="Full name" value={name} onChange={(e) => setName(e.target.value)} error={errors.name} />
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField label="Phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} error={errors.phone} placeholder="+91" />
        <TextField label="Date of birth" type="date" value={dob} max={new Date().toISOString().slice(0, 10)} onChange={(e) => setDob(e.target.value)} error={errors.dateOfBirth} />
      </div>
      <Button type="submit" loading={busy}>
        Save details
      </Button>
    </form>
  );
}
