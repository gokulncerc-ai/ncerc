'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Alert } from '@/components/ui/Alert';
import { Button } from '@/components/ui/Button';
import { PasswordField, TextField } from '@/components/ui/Fields';
import { authApi } from '@/lib/api/auth.api';
import { ApiError, errorMessage, fieldErrors } from '@/lib/api/client';
import type { OtpInfo } from '@/types';
import { OtpStep } from './OtpStep';

type Step = 'email' | 'code' | 'password';

/** E-mail -> 6-digit code (2 minutes) -> new password. Works for admins and super admins. */
export function ForgotPasswordFlow() {
  const router = useRouter();
  const [step, setStep] = useState<Step>('email');
  const [email, setEmail] = useState('');
  const [info, setInfo] = useState<OtpInfo | null>(null);
  const [resetToken, setResetToken] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const sendCode = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setError('');
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) return setErrors({ email: 'Enter the e-mail address of your account' });
    setErrors({});
    setBusy(true);
    try {
      setInfo(await authApi.forgotPassword(email.trim().toLowerCase()));
      setStep('code');
    } catch (err) {
      setError(errorMessage(err));
    } finally {
      setBusy(false);
    }
  };

  const verify = async (otp: string) => {
    setError('');
    try {
      const { resetToken: token } = await authApi.verifyResetOtp({ email: email.trim().toLowerCase(), otp });
      setResetToken(token);
      setStep('password');
    } catch (err) {
      setError(errorMessage(err));
    }
  };

  const resend = async () => {
    setError('');
    try {
      setInfo(await authApi.forgotPassword(email.trim().toLowerCase())); // asking again sends a new code
    } catch (err) {
      setError(errorMessage(err));
    }
  };

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    const local: Record<string, string> = {};
    if (password.length < 8) local.password = 'Use at least 8 characters';
    else if (!/[A-Za-z]/.test(password) || !/\d/.test(password)) local.password = 'Include at least one letter and one number';
    if (confirm !== password) local.confirm = 'The two passwords do not match';
    setErrors(local);
    if (Object.keys(local).length) return;

    setBusy(true);
    setError('');
    try {
      await authApi.resetPassword(resetToken, password);
      router.replace('/login?reset=1');
    } catch (err) {
      if (err instanceof ApiError && err.status === 400) {
        setStep('email'); // the 10-minute reset window closed
        setError('That reset window has closed. Start again to get a new code.');
      } else {
        setErrors(fieldErrors(err));
        setError(errorMessage(err));
      }
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="space-y-7">
      <header>
        <h1 className="text-3xl font-semibold">{step === 'password' ? 'Choose a new password' : 'Reset your password'}</h1>
        <p className="mt-2 text-ink-soft">
          {step === 'email' && 'Enter your account e-mail and we will send a verification code.'}
          {step === 'code' && 'Enter the code to continue.'}
          {step === 'password' && 'You are verified. You have 10 minutes to set the new password.'}
        </p>
      </header>

      {step === 'email' && (
        <form onSubmit={sendCode} className="space-y-5" noValidate>
          {error && <Alert tone="error">{error}</Alert>}
          <TextField label="E-mail" type="email" autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} error={errors.email} autoFocus />
          <Button type="submit" size="lg" loading={busy} className="w-full">
            Send code
          </Button>
        </form>
      )}

      {step === 'code' && info && (
        <OtpStep email={email.trim().toLowerCase()} info={info} error={error} verifyLabel="Verify code" onVerify={verify} onResend={resend} />
      )}

      {step === 'password' && (
        <form onSubmit={save} className="space-y-5" noValidate>
          {error && <Alert tone="error">{error}</Alert>}
          <PasswordField label="New password" autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} error={errors.password} hint="At least 8 characters, with a letter and a number." autoFocus />
          <PasswordField label="Confirm new password" autoComplete="new-password" value={confirm} onChange={(e) => setConfirm(e.target.value)} error={errors.confirm} />
          <Button type="submit" size="lg" loading={busy} className="w-full">
            Save new password
          </Button>
        </form>
      )}

      <p className="text-sm">
        <Link href="/login" className="font-medium text-blueprint hover:underline">
          Back to sign in
        </Link>
      </p>
    </div>
  );
}
