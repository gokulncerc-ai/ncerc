'use client';
import { useRef, useState } from 'react';
import { ImagePlus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ALLOWED_IMAGE_TYPES, MAX_IMAGE_MB, uploadsApi } from '@/lib/api/uploads.api';
import { errorMessage } from '@/lib/api/client';
import type { ImageRef } from '@/types';

/** Checks a file in the browser first (type and size), then uploads it through the backend. */
export async function uploadChecked(file: File): Promise<ImageRef> {
  if (!ALLOWED_IMAGE_TYPES.includes(file.type)) throw new Error('Choose a JPG, PNG or WEBP image.');
  if (file.size > MAX_IMAGE_MB * 1024 * 1024) throw new Error(`The image must be ${MAX_IMAGE_MB} MB or smaller.`);
  const { url, publicId } = await uploadsApi.uploadImage(file);
  return { url, publicId };
}

interface Props {
  label: string;
  value: ImageRef | null;
  onChange: (next: ImageRef | null) => void;
  disabled?: boolean;
}

export function ImageUploader({ label, value, onChange, disabled }: Props) {
  const input = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const pick = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    setBusy(true);
    setError('');
    try {
      onChange(await uploadChecked(file));
    } catch (err) {
      setError(errorMessage(err));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium">{label}</p>
      {value ? (
        <div className="overflow-hidden rounded-md border border-rule bg-paper">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={value.url} alt="" className="aspect-video w-full object-cover" />
        </div>
      ) : (
        <button
          type="button"
          onClick={() => input.current?.click()}
          disabled={disabled || busy}
          className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-md border border-dashed border-ink-soft/40 bg-paper text-ink-soft transition-colors hover:border-blueprint hover:text-blueprint disabled:cursor-not-allowed disabled:opacity-60"
        >
          <ImagePlus className="size-7" strokeWidth={1.5} />
          <span className="text-sm font-medium">{busy ? 'Uploading' : 'Add a cover image'}</span>
          <span className="text-xs">JPG, PNG or WEBP, up to {MAX_IMAGE_MB} MB</span>
        </button>
      )}
      {value && !disabled && (
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => input.current?.click()} loading={busy}>
            Replace
          </Button>
          <Button variant="ghost" size="sm" onClick={() => onChange(null)} className="text-danger hover:bg-danger-soft hover:text-danger">
            <Trash2 className="size-4" />
            Remove
          </Button>
        </div>
      )}
      <input ref={input} type="file" accept={ALLOWED_IMAGE_TYPES.join(',')} onChange={pick} className="hidden" />
      {error && (
        <p role="alert" className="text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
