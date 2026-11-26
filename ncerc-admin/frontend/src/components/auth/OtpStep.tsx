'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { TextField } from '@/components/ui/Fields';
import { Alert } from '@/components/ui/Alert';
import { useCountdown, mmss } from '@/hooks/useCountdown';
import { OTP_LENGTH } from '@/lib/config';
import type { OtpInfo } from '@/types';

interface Props {
  email: string;
  info: OtpInfo;
  error?: string;
  verifyLabel?: string;
  onVerify: (otp: string) => Promise<void>;
  /** Must return the NEW timing info (expiresAt, resendAvailableAt). */
  onResend: () => Promise<void>;
}

/** 6-digit code entry with the 2-minute countdown and a Resend button (after the short cooldown or once expired). */
export function OtpStep({ email, info, error, verifyLabel = 'Verify code', onVerify, onResend }: Props) {
  const [otp, setOtp] = useState('');
  const [busy, setBusy] = useState<'verify' | 'resend' | null>(null);
  const left = useCountdown(info.expiresAt);
  const resendWait = useCountdown(info.resendAvailableAt);
  const expired = left === 0;
  const complete = otp.length === OTP_LENGTH;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!complete || expired) return;
    setBusy('verify');
    try {
      await onVerify(otp);
    } finally {
      setBusy(null);
    }
  };

  const resend = async () => {
    setBusy('resend');
    try {
      await onResend();
      setOtp('');
    } finally {
      setBusy(null);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-5" noValidate>
      <p className="text-[0.95rem] text-ink-soft">
        We sent a {OTP_LENGTH}-digit code to <span className="font-semibold text-ink">{email}</span>. Check the spam folder if it does not arrive.
      </p>

      <TextField
        label="Verification code"
        inputMode="numeric"
        autoComplete="one-time-code"
        maxLength={OTP_LENGTH}
        value={otp}
        onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, OTP_LENGTH))}
        placeholder={'0'.repeat(OTP_LENGTH)}
        className="text-center font-display text-2xl tracking-[0.5em]"
        autoFocus
      />

      {expired ? (
        <Alert tone="warning" title="This code has expired">
          Codes are valid for {Math.round(info.expiresInSeconds / 60)} minutes. Request a new one below.
        </Alert>
      ) : (
        <p className="text-sm text-ink-soft" role="timer" aria-live="off">
          Code expires in <span className="font-semibold tabular-nums text-ink">{mmss(left)}</span>
        </p>
      )}

      {error && <Alert tone="error">{error}</Alert>}

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" size="lg" loading={busy === 'verify'} disabled={!complete || expired}>
          {verifyLabel}
        </Button>
        <Button type="button" variant="outline" size="lg" onClick={resend} loading={busy === 'resend'} disabled={resendWait > 0}>
          {resendWait > 0 ? `Resend code in ${resendWait}s` : 'Resend code'}
        </Button>
      </div>
    </form>
  );
}
