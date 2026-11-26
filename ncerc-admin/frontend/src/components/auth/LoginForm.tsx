'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Alert } from '@/components/ui/Alert';
import { PasswordField, TextField } from '@/components/ui/Fields';
import { useAuth } from '@/hooks/useAuth';
import { ApiError, errorMessage, fieldErrors } from '@/lib/api/client';

export function LoginForm({ next }: { next: string }) {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<{ tone: 'error' | 'warning'; text: string } | null>(null);
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const local: Record<string, string> = {};
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) local.email = 'Enter your e-mail address';
    if (!password) local.password = 'Enter your password';
    setErrors(local);
    setFormError(null);
    if (Object.keys(local).length) return;

    setBusy(true);
    try {
      await login(email.trim().toLowerCase(), password);
      router.replace(next);
    } catch (err) {
      setErrors(fieldErrors(err));
      // 403 = pending approval or suspended: not a typing mistake, so a calmer colour and the backend's own wording
      const notAllowed = err instanceof ApiError && err.status === 403;
      setFormError({ tone: notAllowed ? 'warning' : 'error', text: errorMessage(err) });
    } finally {
      setBusy(false);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-5" noValidate>
      {formError && <Alert tone={formError.tone}>{formError.text}</Alert>}
      <TextField label="E-mail" type="email" autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} error={errors.email} autoFocus />
      <PasswordField
        label="Password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
        aside={
          <Link href="/forgot-password" className="text-sm font-medium text-blueprint hover:underline">
            Forgot password?
          </Link>
        }
      />
      <Button type="submit" size="lg" loading={busy} className="w-full">
        Sign in
      </Button>
    </form>
  );
}
