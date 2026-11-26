'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock } from 'lucide-react';
import { Alert } from '@/components/ui/Alert';
import { Button } from '@/components/ui/Button';
import { SelectField, TextAreaField, TextField } from '@/components/ui/Fields';
import { useToast } from '@/context/ToastProvider';
import { useAuth } from '@/hooks/useAuth';
import { errorMessage, fieldErrors } from '@/lib/api/client';
import { eventsApi, type EventInput } from '@/lib/api/events.api';
import { cn, formatDate, fromLocalInput, toLocalInput } from '@/lib/utils';
import type { AdminEvent, EventStatus, EventType, ImageRef } from '@/types';
import { GalleryUploader } from './GalleryUploader';
import { ImageUploader } from './ImageUploader';

interface Props {
  mode: 'create' | 'edit';
  event?: AdminEvent;
  defaultType?: EventType;
}

export function EventForm({ mode, event, defaultType = 'news' }: Props) {
  const router = useRouter();
  const toast = useToast();
  const { isSuperAdmin } = useAuth();

  const [type, setType] = useState<EventType>(event?.type ?? defaultType);
  const [title, setTitle] = useState(event?.title ?? '');
  const [summary, setSummary] = useState(event?.summary ?? '');
  const [description, setDescription] = useState(event?.description ?? '');
  const [coverImage, setCoverImage] = useState<ImageRef | null>(event?.coverImage ?? null);
  const [gallery, setGallery] = useState<ImageRef[]>(event?.gallery ?? []);
  const [venue, setVenue] = useState(event?.venue ?? '');
  const [eventDate, setEventDate] = useState(toLocalInput(event?.eventDate));
  const [endDate, setEndDate] = useState(toLocalInput(event?.endDate));
  const [registrationUrl, setRegistrationUrl] = useState(event?.registrationUrl ?? '');
  const [status, setStatus] = useState<EventStatus>(event?.status ?? 'draft');
  const [isFeatured, setIsFeatured] = useState(event?.isFeatured ?? false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState('');
  const [busy, setBusy] = useState<EventStatus | 'save' | null>(null);

  const readOnly = mode === 'edit' && event?.canEdit === false;
  const isEvent = type === 'event';

  const validate = (): Record<string, string> => {
    const e: Record<string, string> = {};
    if (title.trim().length < 3) e.title = 'Give it a title of at least 3 characters';
    if (isEvent && !eventDate) e.eventDate = 'Events need a start date and time';
    if (isEvent && eventDate && endDate && new Date(endDate) < new Date(eventDate)) e.endDate = 'The end cannot be before the start';
    if (isEvent && registrationUrl.trim() && !/^https?:\/\/\S+\.\S+/.test(registrationUrl.trim())) e.registrationUrl = 'Enter a full link, starting with https://';
    return e;
  };

  const save = async (nextStatus: EventStatus, spinner: EventStatus | 'save') => {
    setFormError('');
    const local = validate();
    setErrors(local);
    if (Object.keys(local).length) return;

    const payload: EventInput = {
      title: title.trim(),
      type,
      summary: summary.trim(),
      description,
      coverImage,
      gallery,
      venue: isEvent ? venue.trim() : '',
      eventDate: isEvent ? fromLocalInput(eventDate) : null,
      endDate: isEvent ? fromLocalInput(endDate) : null,
      registrationUrl: isEvent ? registrationUrl.trim() : '',
      status: nextStatus,
      isFeatured,
    };

    setBusy(spinner);
    try {
      if (mode === 'create') await eventsApi.create(payload);
      else await eventsApi.update(event!.id, payload);
      toast.success(nextStatus === 'published' ? 'Published. It will appear on the website.' : mode === 'create' ? 'Saved as a draft.' : 'Changes saved.');
      router.push('/events');
    } catch (err) {
      setErrors(fieldErrors(err));
      setFormError(errorMessage(err));
    } finally {
      setBusy(null);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (mode === 'edit') void save(status, 'save');
      }}
      noValidate
      className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_21rem]"
    >
      <div className="space-y-6">
        {readOnly && (
          <Alert tone="info" title="You can view this item, but not change it">
            Only the person who added it, or a super admin, can edit or delete it.
          </Alert>
        )}
        {mode === 'edit' && isSuperAdmin && event?.createdBy && (
          <p className="text-sm text-ink-soft">
            Added by <span className="font-semibold text-ink">{event.createdBy.name}</span> on {formatDate(event.createdAt)}
            {event.updatedBy && event.updatedBy.email !== event.createdBy.email ? `. Last edited by ${event.updatedBy.name} on ${formatDate(event.updatedAt)}.` : '.'}
          </p>
        )}
        {formError && !Object.keys(errors).length && <Alert tone="error">{formError}</Alert>}

        <fieldset disabled={readOnly} className="space-y-6 disabled:opacity-90">
          <div>
            <p className="mb-1.5 text-sm font-medium">What are you adding?</p>
            <div role="radiogroup" aria-label="Type" className="inline-flex rounded-md border border-rule bg-sheet p-0.5">
              {(['news', 'event'] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  role="radio"
                  aria-checked={type === t}
                  onClick={() => setType(t)}
                  className={cn('rounded px-5 py-2 text-sm font-semibold transition-colors', type === t ? 'bg-blueprint text-white' : 'text-ink-soft hover:text-blueprint')}
                >
                  {t === 'news' ? 'News item' : 'Event'}
                </button>
              ))}
            </div>
          </div>

          <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} error={errors.title} maxLength={200} placeholder={isEvent ? 'Campus placement drive' : 'Library timings during exams'} />
          <TextAreaField label="Short summary" value={summary} onChange={(e) => setSummary(e.target.value)} error={errors.summary} rows={2} maxLength={500} hint={`${summary.length} of 500. Shown in lists on the website.`} />
          <TextAreaField label="Full details" value={description} onChange={(e) => setDescription(e.target.value)} error={errors.description} rows={10} />

          {isEvent && (
            <div className="space-y-5 rounded-lg border border-rule bg-sheet p-5">
              <h2 className="text-lg font-semibold">When and where</h2>
              <div className="grid gap-5 sm:grid-cols-2">
                <TextField label="Starts" type="datetime-local" value={eventDate} onChange={(e) => setEventDate(e.target.value)} error={errors.eventDate} />
                <TextField label="Ends (optional)" type="datetime-local" value={endDate} onChange={(e) => setEndDate(e.target.value)} error={errors.endDate} />
              </div>
              <TextField label="Venue" value={venue} onChange={(e) => setVenue(e.target.value)} error={errors.venue} maxLength={200} placeholder="Seminar hall" />
              <TextField label="Registration link (optional)" type="url" value={registrationUrl} onChange={(e) => setRegistrationUrl(e.target.value)} error={errors.registrationUrl} placeholder="https://" />
            </div>
          )}

          <GalleryUploader value={gallery} onChange={setGallery} disabled={readOnly} />
        </fieldset>
      </div>

      <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
        <div className="space-y-5 rounded-lg border border-rule bg-sheet p-5">
          <fieldset disabled={readOnly} className="space-y-5">
            <ImageUploader label="Cover image" value={coverImage} onChange={setCoverImage} disabled={readOnly} />
            <label className="flex items-start gap-3 text-sm">
              <input type="checkbox" checked={isFeatured} onChange={(e) => setIsFeatured(e.target.checked)} className="mt-0.5 size-4 accent-[var(--color-blueprint)]" />
              <span>
                <span className="font-medium">Feature on the website</span>
                <span className="block text-ink-soft">Highlights it on the home page.</span>
              </span>
            </label>
            {mode === 'edit' && (
              <SelectField label="Status" value={status} onChange={(e) => setStatus(e.target.value as EventStatus)} error={errors.status}>
                <option value="draft">Draft (hidden)</option>
                <option value="published">Published (visible)</option>
                <option value="archived">Archived (hidden)</option>
              </SelectField>
            )}
          </fieldset>

          {readOnly ? (
            <p className="flex items-center gap-2 text-sm text-ink-soft">
              <Lock className="size-4" /> Read only
            </p>
          ) : mode === 'create' ? (
            <div className="flex flex-col gap-3">
              <Button variant="marker" size="lg" onClick={() => save('published', 'published')} loading={busy === 'published'} disabled={busy !== null}>
                Publish now
              </Button>
              <Button variant="outline" size="lg" onClick={() => save('draft', 'draft')} loading={busy === 'draft'} disabled={busy !== null}>
                Save as draft
              </Button>
            </div>
          ) : (
            <Button type="submit" variant="marker" size="lg" loading={busy === 'save'} className="w-full">
              Save changes
            </Button>
          )}
          <Link href="/events" className="block text-center text-sm font-medium text-blueprint hover:underline">
            Back to the list
          </Link>
        </div>
      </aside>
    </form>
  );
}
