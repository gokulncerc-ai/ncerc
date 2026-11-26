'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Alert } from '@/components/ui/Alert';
import { PageSpinner } from '@/components/ui/Spinner';
import { EventForm } from '@/components/events/EventForm';
import { PageHeader } from '@/components/layout/PageHeader';
import { errorMessage } from '@/lib/api/client';
import { eventsApi } from '@/lib/api/events.api';
import type { AdminEvent } from '@/types';

export default function EditEventPage() {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<AdminEvent | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    let ignore = false;
    eventsApi
      .get(id)
      .then((e) => !ignore && setEvent(e))
      .catch((err) => !ignore && setError(errorMessage(err)));
    return () => {
      ignore = true;
    };
  }, [id]);

  if (error) return <Alert tone="error">{error}</Alert>;
  if (!event) return <PageSpinner label="Loading" />;

  return (
    <>
      <PageHeader title={event.canEdit ? 'Edit' : 'View'} description={event.title} />
      <EventForm mode="edit" event={event} />
    </>
  );
}
