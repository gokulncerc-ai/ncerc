'use client';
import Link from 'next/link';
import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { OtpStep } from '@/components/auth/OtpStep';
import { Alert } from '@/components/ui/Alert';
import { Button, buttonClasses } from '@/components/ui/Button';
import { PasswordField, SelectField, TextField } from '@/components/ui/Fields';
import { useToast } from '@/context/ToastProvider';
import { useAuth } from '@/hooks/useAuth';
import { adminsApi } from '@/lib/api/admins.api';
import { ApiError, errorMessage, fieldErrors } from '@/lib/api/client';
import type { OtpInfo, Role } from '@/types';

type Phase = 'form' | 'code' | 'done';

/**
 * Who may pick which account type:
 *   primary super admin   -> Admin or Super admin
 *   other super admins    -> Admin only (the "Super admin" option is shown but disabled)
 * The API enforces the same rule; this only keeps the form honest.
 */
export function CreateAccountForm() {
  const toast = useToast();
  const { isPrimary } = useAuth();

  const [phase, setPhase] = useState<Phase>('form');
  const [role, setRole] = useState<Role>('admin');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState('');
  const [busy, setBusy] = useState(false);
  const [info, setInfo] = useState<OtpInfo | null>(null);
  const [codeError, setCodeError] = useState('');
  const [created, setCreated] = useState<{ name: string; email: string; role: Role } | null>(null);

  const reset = () => {
    setPhase('form');
    setRole('admin');
    setName('');
    setEmail('');
    setPhone('');
    setPassword('');
    setConfirm('');
    setErrors({});
    setFormError('');
    setInfo(null);
    setCreated(null);
  };

  const input = () => ({ name: name.trim(), email: email.trim().toLowerCase(), phone: phone.trim() || undefined, password });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const local: Record<string, string> = {};
    if (name.trim().length < 2) local.name = 'Enter the full name';
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) local.email = 'Enter a valid e-mail address';
    if (phone.trim() && !/^\+?[1-9]\d{6,14}$/.test(phone.replace(/[\s()-]/g, ''))) local.phone = 'Enter a valid phone number, for example +919876543210';
    if (password.length < 8) local.password = 'Use at least 8 characters';
    else if (!/[A-Za-z]/.test(password) || !/\d/.test(password)) local.password = 'Include at least one letter and one number';
    if (confirm !== password) local.confirm = 'The two passwords do not match';
    if (role === 'super_admin' && !isPrimary) local.role = 'Only the primary super admin can create super admins';
    setErrors(local);
    setFormError('');
    if (Object.keys(local).length) return;

    setBusy(true);
    try {
      if (role === 'admin') {
        const user = await adminsApi.createAdmin(input());
        setCreated({ name: user.name, email: user.email, role: 'admin' });
        setPhase('done');
        toast.success('Admin account created.');
      } else {
        setInfo(await adminsApi.startSuperAdmin(input()));
        setPhase('code');
      }
    } catch (err) {
      const fields = fieldErrors(err);
      if (err instanceof ApiError && err.status === 409) fields.email = err.message; // "already belongs to an admin account"
      setErrors(fields);
      setFormError(Object.keys(fields).length ? '' : errorMessage(err));
    } finally {
      setBusy(false);
    }
  };

  const verify = async (otp: string) => {
    setCodeError('');
    try {
      const user = await adminsApi.verifySuperAdmin({ email: email.trim().toLowerCase(), otp });
      setCreated({ name: user.name, email: user.email, role: 'super_admin' });
      setPhase('done');
      toast.success('Super admin account created.');
    } catch (err) {
      setCodeError(errorMessage(err));
    }
  };

  const resend = async () => {
    setCodeError('');
    try {
      setInfo(await adminsApi.resendSuperAdmin(email.trim().toLowerCase()));
    } catch (err) {
      setCodeError(errorMessage(err));
    }
  };

  if (phase === 'done' && created) {
    return (
      <div className="max-w-xl space-y-6 rounded-lg border border-rule bg-sheet p-8">
        <CheckCircle2 className="size-10 text-ok" strokeWidth={1.6} />
        <div>
          <h2 className="text-2xl font-semibold">{created.role === 'super_admin' ? 'Super admin' : 'Admin'} account created</h2>
          <p className="mt-2 text-ink-soft">
            {created.name} ({created.email}) can sign in now with the password you set. A welcome e-mail was sent. Share the password through a safe channel, and ask them to keep it private.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button onClick={reset}>Create another account</Button>
          <Link href="/admins" className={buttonClasses('outline', 'md')}>
            See all accounts
          </Link>
        </div>
      </div>
    );
  }

  if (phase === 'code' && info) {
    return (
      <div className="max-w-xl space-y-5 rounded-lg border border-rule bg-sheet p-8">
        <div>
          <h2 className="text-2xl font-semibold">Confirm the new super admin&apos;s e-mail</h2>
          <p className="mt-1 text-ink-soft">The account is created only after the new person&apos;s e-mail is confirmed with this code.</p>
        </div>
        <OtpStep email={email.trim().toLowerCase()} info={info} error={codeError} verifyLabel="Create super admin" onVerify={verify} onResend={resend} />
        <Button variant="ghost" onClick={() => setPhase('form')}>
          Change the details
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="max-w-xl space-y-6 rounded-lg border border-rule bg-sheet p-8">
      {formError && <Alert tone="error">{formError}</Alert>}

      <SelectField
        label="Account type"
        value={role}
        onChange={(e) => setRole(e.target.value as Role)}
        error={errors.role}
        hint={
          role === 'super_admin'
            ? 'Super admins manage every admin, news item and event. A code is e-mailed to the new person to confirm their address.'
            : isPrimary
              ? 'Admins add and edit their own news and events.'
              : 'Admins add and edit their own news and events. Only the primary super admin can create super admins.'
        }
      >
        <option value="admin">Admin</option>
        <option value="super_admin" disabled={!isPrimary}>
          Super admin{!isPrimary ? ' (primary super admin only)' : ''}
        </option>
      </SelectField>

      <TextField label="Full name" value={name} onChange={(e) => setName(e.target.value)} error={errors.name} autoComplete="off" />
      <TextField label="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} error={errors.email} autoComplete="off" hint="This is the address they sign in with." />
      <TextField label="Phone (optional)" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} error={errors.phone} autoComplete="off" placeholder="+91" />

      <div className="grid gap-5 sm:grid-cols-2">
        <PasswordField label="Password" value={password} onChange={(e) => setPassword(e.target.value)} error={errors.password} autoComplete="new-password" hint="8+ characters, with a letter and a number." />
        <PasswordField label="Confirm password" value={confirm} onChange={(e) => setConfirm(e.target.value)} error={errors.confirm} autoComplete="new-password" />
      </div>

      <Button type="submit" size="lg" loading={busy}>
        {role === 'super_admin' ? 'Send confirmation code' : 'Create account'}
      </Button>
    </form>
  );
}
