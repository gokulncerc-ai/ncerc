'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowUpRight, Users } from 'lucide-react';
import { Alert } from '@/components/ui/Alert';
import { PageSpinner } from '@/components/ui/Spinner';
import { CoverThumb } from '@/components/events/CoverThumb';
import { DateBlock } from '@/components/events/DateBlock';
import { StatusBadge, TypeBadge } from '@/components/events/StatusBadge';
import { useAuth } from '@/hooks/useAuth';
import { errorMessage } from '@/lib/api/client';
import { dashboardApi, type DashboardStats } from '@/lib/api/dashboard.api';

export default function DashboardPage() {
  const { user, isSuperAdmin } = useAuth();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    let ignore = false;
    dashboardApi
      .stats()
      .then((s) => !ignore && setStats(s))
      .catch((e) => !ignore && setError(errorMessage(e)));
    return () => {
      ignore = true;
    };
  }, []);

  const first = user?.name.split(' ')[0] ?? '';

  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-4xl font-semibold sm:text-5xl">Welcome, {first}.</h1>
        <p className="mt-3 max-w-2xl text-lg text-ink-soft">
          {isSuperAdmin
            ? 'Add news and events, and create accounts for the people who help you.'
            : 'Add news and events for the college website. Publish them when they are ready.'}
        </p>
      </header>

      <section aria-label="What would you like to do" className="grid gap-5 sm:grid-cols-2">
        <Link href="/events/new?type=event" className="group relative flex min-h-44 flex-col justify-between overflow-hidden rounded-xl bg-blueprint p-6 text-white transition-colors hover:bg-blueprint-deep">
          <div>
            <h2 className="text-2xl font-semibold">Add an event</h2>
            <p className="mt-1.5 max-w-xs text-white/75">Something with a date, a place and maybe a registration link.</p>
          </div>
          <span className="inline-flex items-center gap-1.5 font-semibold text-marker">
            Start <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
          <div className="absolute -right-3 -top-3 w-24 rotate-6 opacity-95" aria-hidden="true">
            <DateBlock iso={new Date().toISOString()} size="lg" className="border-white/30" />
          </div>
        </Link>

        <Link href="/events/new?type=news" className="group relative flex min-h-44 flex-col justify-between overflow-hidden rounded-xl border border-marker/60 bg-marker-soft p-6 transition-colors hover:bg-[#ffecb3]">
          <div>
            <h2 className="text-2xl font-semibold">Add a news item</h2>
            <p className="mt-1.5 max-w-xs text-ink-soft">An announcement, a notice or a result to share with everyone.</p>
          </div>
          <span className="inline-flex items-center gap-1.5 font-semibold text-blueprint">
            Start <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
          <div className="absolute right-6 top-6 w-28 space-y-2" aria-hidden="true">
            <div className="h-2.5 rounded-full bg-ink/70" />
            <div className="h-2 w-4/5 rounded-full bg-ink/25" />
            <div className="h-2 w-3/5 rounded-full bg-ink/25" />
          </div>
        </Link>
      </section>

      {error && <Alert tone="error">{error}</Alert>}

      {!stats && !error ? (
        <PageSpinner label="Loading your numbers" />
      ) : (
        stats && (
          <>
            <section aria-label="Numbers">
              <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-rule bg-rule sm:grid-cols-4">
                {[
                  { label: 'Published', value: stats.events.published },
                  { label: 'Drafts', value: stats.events.drafts },
                  { label: 'Upcoming events', value: stats.events.upcomingPublished },
                  { label: 'Added by you', value: stats.events.mine },
                ].map((s) => (
                  <div key={s.label} className="bg-sheet p-5">
                    <dd className="font-display text-4xl font-bold text-blueprint">{s.value}</dd>
                    <dt className="mt-1 text-sm text-ink-soft">{s.label}</dt>
                  </div>
                ))}
              </dl>
              {isSuperAdmin && stats.admins && (
                <Link href="/admins" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blueprint hover:underline">
                  <Users className="size-4" />
                  {stats.admins.active} active admin{stats.admins.active === 1 ? '' : 's'}
                  {stats.admins.pending > 0 ? `, ${stats.admins.pending} waiting for approval` : ''}
                </Link>
              )}
            </section>

            <section aria-labelledby="recent">
              <div className="mb-4 flex items-end justify-between">
                <h2 id="recent" className="text-2xl font-semibold">
                  Recently added
                </h2>
                <Link href="/events" className="text-sm font-medium text-blueprint hover:underline">
                  See all news and events
                </Link>
              </div>
              {stats.recent.length === 0 ? (
                <p className="rounded-lg border border-dashed border-ink-soft/40 bg-sheet px-5 py-8 text-center text-ink-soft">Nothing has been added yet. The two tiles above are the quickest way to start.</p>
              ) : (
                <ul className="divide-y divide-rule overflow-hidden rounded-lg border border-rule bg-sheet">
                  {stats.recent.map((e) => (
                    <li key={e.id}>
                      <Link href={`/events/${e.id}`} className="flex items-center gap-4 p-4 hover:bg-paper">
                        <DateBlock iso={e.type === 'event' ? e.eventDate : null} size="sm" />
                        <span className="min-w-0 flex-1 truncate font-medium">{e.title}</span>
                        <span className="hidden gap-2 sm:flex">
                          <TypeBadge type={e.type} />
                          <StatusBadge status={e.status} />
                        </span>
                        {/* cover image: only when the item has one, at the right end of the row */}
                        <CoverThumb url={e.coverImage?.url} title={e.title} size="sm" />
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </>
        )
      )}
    </div>
  );
}