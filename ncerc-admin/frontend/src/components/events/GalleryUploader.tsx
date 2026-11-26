'use client';
import { useRef, useState } from 'react';
import { Plus, X } from 'lucide-react';
import { ALLOWED_IMAGE_TYPES } from '@/lib/api/uploads.api';
import { errorMessage } from '@/lib/api/client';
import type { ImageRef } from '@/types';
import { uploadChecked } from './ImageUploader';

const MAX = 20;

export function GalleryUploader({ value, onChange, disabled }: { value: ImageRef[]; onChange: (next: ImageRef[]) => void; disabled?: boolean }) {
  const input = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const pick = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []).slice(0, MAX - value.length);
    e.target.value = '';
    if (!files.length) return;
    setBusy(true);
    setError('');
    const added: ImageRef[] = [];
    try {
      for (const f of files) added.push(await uploadChecked(f)); // one by one: easy on the server and the 5 MB limit
    } catch (err) {
      setError(errorMessage(err));
    } finally {
      if (added.length) onChange([...value, ...added]);
      setBusy(false);
    }
  };

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium">
        Gallery <span className="font-normal text-ink-soft">({value.length} of {MAX})</span>
      </p>
      <ul className="grid grid-cols-3 gap-2 sm:grid-cols-4">
        {value.map((img, i) => (
          <li key={`${img.url}-${i}`} className="group relative aspect-square overflow-hidden rounded-md border border-rule bg-paper">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img.url} alt="" className="size-full object-cover" />
            {!disabled && (
              <button
                type="button"
                onClick={() => onChange(value.filter((_, idx) => idx !== i))}
                className="absolute right-1 top-1 rounded bg-ink/75 p-1 text-white opacity-100 transition-opacity hover:bg-danger sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100"
                aria-label="Remove this image"
              >
                <X className="size-3.5" />
              </button>
            )}
          </li>
        ))}
        {!disabled && value.length < MAX && (
          <li>
            <button
              type="button"
              onClick={() => input.current?.click()}
              disabled={busy}
              className="flex aspect-square w-full flex-col items-center justify-center gap-1 rounded-md border border-dashed border-ink-soft/40 bg-paper text-ink-soft hover:border-blueprint hover:text-blueprint disabled:opacity-60"
            >
              <Plus className="size-5" />
              <span className="text-xs font-medium">{busy ? 'Uploading' : 'Add'}</span>
            </button>
          </li>
        )}
      </ul>
      <input ref={input} type="file" multiple accept={ALLOWED_IMAGE_TYPES.join(',')} onChange={pick} className="hidden" />
      {error && (
        <p role="alert" className="text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
