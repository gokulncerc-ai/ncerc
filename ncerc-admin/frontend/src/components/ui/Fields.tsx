'use client';
import { useId, useState, type InputHTMLAttributes, type ReactNode, type SelectHTMLAttributes, type TextareaHTMLAttributes } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { cn } from '@/lib/utils';

const control =
  'block w-full rounded-md border bg-sheet px-3.5 text-[0.95rem] text-ink placeholder:text-ink-soft/70 ' +
  'transition-colors focus:border-blueprint focus:outline-none focus:ring-2 focus:ring-blueprint/25 disabled:bg-paper disabled:text-ink-soft';

interface Shared {
  label: string;
  error?: string;
  hint?: string;
  /** Shown on the right of the label, e.g. a "Forgot password?" link. */
  aside?: ReactNode;
}

function Frame({ id, label, error, hint, aside, children }: Shared & { id: string; children: ReactNode }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-sm font-medium text-ink">
          {label}
        </label>
        {aside}
      </div>
      {children}
      {error ? (
        <p id={`${id}-msg`} role="alert" className="text-sm text-danger">
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-msg`} className="text-sm text-ink-soft">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

export function TextField({ label, error, hint, aside, className, id, ...rest }: Shared & InputHTMLAttributes<HTMLInputElement>) {
  const auto = useId();
  const fid = id ?? auto;
  return (
    <Frame id={fid} label={label} error={error} hint={hint} aside={aside}>
      <input id={fid} aria-invalid={!!error} aria-describedby={error || hint ? `${fid}-msg` : undefined} className={cn(control, 'h-11', error ? 'border-danger' : 'border-rule', className)} {...rest} />
    </Frame>
  );
}

export function PasswordField({ label, error, hint, aside, className, id, ...rest }: Shared & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>) {
  const auto = useId();
  const fid = id ?? auto;
  const [shown, setShown] = useState(false);
  return (
    <Frame id={fid} label={label} error={error} hint={hint} aside={aside}>
      <div className="relative">
        <input
          id={fid}
          type={shown ? 'text' : 'password'}
          aria-invalid={!!error}
          aria-describedby={error || hint ? `${fid}-msg` : undefined}
          className={cn(control, 'h-11 pr-11', error ? 'border-danger' : 'border-rule', className)}
          {...rest}
        />
        <button
          type="button"
          onClick={() => setShown((s) => !s)}
          aria-label={shown ? 'Hide password' : 'Show password'}
          className="absolute inset-y-0 right-0 flex w-11 items-center justify-center text-ink-soft hover:text-blueprint"
        >
          {shown ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
        </button>
      </div>
    </Frame>
  );
}

export function SelectField({ label, error, hint, aside, className, id, children, ...rest }: Shared & SelectHTMLAttributes<HTMLSelectElement>) {
  const auto = useId();
  const fid = id ?? auto;
  return (
    <Frame id={fid} label={label} error={error} hint={hint} aside={aside}>
      <select id={fid} aria-invalid={!!error} aria-describedby={error || hint ? `${fid}-msg` : undefined} className={cn(control, 'h-11', error ? 'border-danger' : 'border-rule', className)} {...rest}>
        {children}
      </select>
    </Frame>
  );
}

export function TextAreaField({ label, error, hint, aside, className, id, ...rest }: Shared & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const auto = useId();
  const fid = id ?? auto;
  return (
    <Frame id={fid} label={label} error={error} hint={hint} aside={aside}>
      <textarea id={fid} aria-invalid={!!error} aria-describedby={error || hint ? `${fid}-msg` : undefined} className={cn(control, 'py-2.5 leading-relaxed', error ? 'border-danger' : 'border-rule', className)} {...rest} />
    </Frame>
  );
}
