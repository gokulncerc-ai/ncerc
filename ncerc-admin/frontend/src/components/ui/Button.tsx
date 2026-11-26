import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { Spinner } from './Spinner';

export type ButtonVariant = 'primary' | 'marker' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-blueprint text-white hover:bg-blueprint-deep',
  marker: 'bg-marker text-ink hover:bg-marker-deep',
  outline: 'border border-rule bg-sheet text-ink hover:border-blueprint hover:text-blueprint',
  ghost: 'text-ink-soft hover:bg-blueprint-soft hover:text-blueprint',
  danger: 'bg-danger text-white hover:bg-[#9a281f]',
};
const sizes: Record<ButtonSize, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-4 text-[0.95rem]',
  lg: 'h-12 px-6 text-base',
};

/** Class names for a button, so a <Link> can look like one. */
export const buttonClasses = (variant: ButtonVariant = 'primary', size: ButtonSize = 'md', extra?: string) =>
  cn(
    'inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors',
    'disabled:cursor-not-allowed disabled:opacity-55',
    variants[variant],
    sizes[size],
    extra,
  );

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

export function Button({ variant, size, loading, disabled, className, children, type = 'button', ...rest }: Props) {
  return (
    <button type={type} disabled={disabled || loading} className={buttonClasses(variant, size, className)} {...rest}>
      {loading && <Spinner />}
      {children}
    </button>
  );
}
