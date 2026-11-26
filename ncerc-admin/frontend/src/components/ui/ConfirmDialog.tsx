'use client';
import { useEffect, useId } from 'react';
import { Button } from './Button';

interface Props {
  open: boolean;
  title: string;
  description: React.ReactNode;
  confirmLabel: string;
  danger?: boolean;
  loading?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  children?: React.ReactNode;
}

/** A small modal. Escape or the backdrop cancels. `children` can hold extra form fields. */
export function ConfirmDialog({ open, title, description, confirmLabel, danger, loading, onConfirm, onCancel, children }: Props) {
  const titleId = useId();
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && !loading && onCancel();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, loading, onCancel]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/45 p-4 sm:items-center" onMouseDown={(e) => e.target === e.currentTarget && !loading && onCancel()}>
      <div role="dialog" aria-modal="true" aria-labelledby={titleId} className="w-full max-w-md rounded-lg border border-rule bg-sheet p-6 shadow-xl">
        <h2 id={titleId} className="text-xl font-semibold">
          {title}
        </h2>
        <div className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{description}</div>
        {children && <div className="mt-4">{children}</div>}
        <div className="mt-6 flex justify-end gap-3">
          <Button variant="outline" onClick={onCancel} disabled={loading}>
            Cancel
          </Button>
          <Button variant={danger ? 'danger' : 'primary'} onClick={onConfirm} loading={loading}>
            {confirmLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
