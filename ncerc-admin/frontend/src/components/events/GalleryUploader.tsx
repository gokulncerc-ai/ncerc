'use client';
import { useRef, useState } from 'react';
import { Plus, Star, X } from 'lucide-react';
import { ALLOWED_IMAGE_TYPES } from '@/lib/api/uploads.api';
import { errorMessage } from '@/lib/api/client';
import { cn } from '@/lib/utils';
import type { ImageRef } from '@/types';
import { uploadChecked } from './ImageUploader';

const MAX = 20;

interface Props {
  value: ImageRef[];
  onChange: (next: ImageRef[]) => void;
  /** The image used as the preview in lists. */
  cover: ImageRef | null;
  onSetCover: (img: ImageRef | null) => void;
  disabled?: boolean;
}

export function GalleryUploader({ value, onChange, cover, onSetCover, disabled }: Props) {
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
      if (added.length) {
        onChange([...value, ...added]);
        if (!cover?.url) onSetCover(added[0]); // no cover yet: the first image is preselected
      }
      setBusy(false);
    }
  };

  const remove = (index: number) => {
    const removed = value[index];
    const next = value.filter((_, idx) => idx !== index);
    onChange(next);
    if (removed.url === cover?.url) onSetCover(next[0] ?? null); // the cover was removed: use the next image
  };

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium">
        Gallery <span className="font-normal text-ink-soft">({value.length} of {MAX})</span>
      </p>
      {value.length > 0 && !disabled && (
        <p className="text-sm text-ink-soft">Choose “Set as cover” on the photo that should be the preview in lists.</p>
      )}
      <ul className="grid grid-cols-3 gap-2 sm:grid-cols-4">
        {value.map((img, i) => {
          const isCover = img.url === cover?.url;
          return (
            <li
              key={`${img.url}-${i}`}
              className={cn(
                'group relative aspect-square overflow-hidden rounded-md border bg-paper',
                isCover ? 'border-blueprint ring-2 ring-blueprint/40' : 'border-rule',
              )}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.url} alt="" className="size-full object-cover" />

              {isCover ? (
                <span className="absolute bottom-1 left-1 inline-flex items-center gap-1 rounded bg-blueprint px-1.5 py-0.5 text-[0.7rem] font-semibold text-white">
                  <Star className="size-3" /> Cover
                </span>
              ) : (
                !disabled && (
                  <button
                    type="button"
                    onClick={() => onSetCover(img)}
                    className="absolute bottom-1 left-1 rounded bg-ink/75 px-1.5 py-0.5 text-[0.7rem] font-semibold text-white hover:bg-blueprint"
                  >
                    Set as cover
                  </button>
                )
              )}

              {!disabled && (
                <button
                  type="button"
                  onClick={() => remove(i)}
                  className="absolute right-1 top-1 rounded bg-ink/75 p-1 text-white opacity-100 transition-opacity hover:bg-danger sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100"
                  aria-label="Remove this image"
                >
                  <X className="size-3.5" />
                </button>
              )}
            </li>
          );
        })}
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