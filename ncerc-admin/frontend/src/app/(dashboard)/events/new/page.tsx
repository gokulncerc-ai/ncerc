'use client';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { EventForm } from '@/components/events/EventForm';
import { PageHeader } from '@/components/layout/PageHeader';
import { PageSpinner } from '@/components/ui/Spinner';

function NewEvent() {
  const type = useSearchParams().get('type') === 'event' ? 'event' : 'news';
  return (
    <>
      <PageHeader title={type === 'event' ? 'Add an event' : 'Add a news item'} description="Save it as a draft while you work, then publish when it is ready." />
      <EventForm key={type} mode="create" defaultType={type} />
    </>
  );
}

export default function NewEventPage() {
  return (
    <Suspense fallback={<PageSpinner />}>
      <NewEvent />
    </Suspense>
  );
}
