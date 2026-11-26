'use client';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { Newspaper, Plus } from 'lucide-react';
import { Alert } from '@/components/ui/Alert';
import { buttonClasses } from '@/components/ui/Button';
import { ConfirmDialog } from '@/components/ui/ConfirmDialog';
import { PageSpinner } from '@/components/ui/Spinner';
import { EventFilters, emptyFilters, type EventFilterState } from '@/components/events/EventFilters';
import { EventsTable, Pager } from '@/components/events/EventsTable';
import { PageHeader } from '@/components/layout/PageHeader';
import { useToast } from '@/context/ToastProvider';
import { useAuth } from '@/hooks/useAuth';
import { useDebounce } from '@/hooks/useDebounce';
import { useLatestRequest } from '@/hooks/useLatestRequest';
import { errorMessage } from '@/lib/api/client';
import { eventsApi } from '@/lib/api/events.api';
import type { AdminEvent, Pagination } from '@/types';
export default function EventsPage() {
  const toast = useToast();
  const { isSuperAdmin } = useAuth();
  const [filters, setFilters] = useState<EventFilterState>(emptyFilters);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState<AdminEvent[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [busyId, setBusyId] = useState<string | null>(null);
  const [toDelete, setToDelete] = useState<AdminEvent | null>(null);
  const [deleting, setDeleting] = useState(false);
  const search = useDebounce(filters.search);
  const begin = useLatestRequest();
  // any filter change goes back to page 1
  useEffect(() => setPage(1), [filters.type, filters.status, filters.when, filters.mine, search]);
  const load = useCallback(async () => {
    const isLatest = begin(); // makes any request still in flight stale
    setLoading(true);
    setError('');
    try {
      const res = await eventsApi.list({
        type: filters.type || undefined,
        status: filters.status || undefined,
        when: filters.when || undefined,
        search: search || undefined,
        mine: filters.mine,
        page,
        limit: 10,
      });
      if (!isLatest()) return;//a newer request has started: this answer is out of date
      setItems(res.items);
      setPagination(res.pagination);
    } catch (err) {
      if (isLatest()) setError(errorMessage(err));
    } finally {
      if (isLatest()) setLoading(false);
    }
  }, [begin, filters.type, filters.status, filters.when, filters.mine, search, page]);
  useEffect(() => {
    void load();
  }, [load]);
  const toggle = async (item: AdminEvent) => {
    setBusyId(item.id);
    try {
      const next = item.status === 'published' ? 'draft' : 'published';
      await eventsApi.setStatus(item.id, next);
      toast.success(next === 'published' ? 'Published.' : 'Unpublished. It is hidden from the website.');
      await load();
    } catch (err) {
      toast.error(errorMessage(err));
    } finally {
      setBusyId(null);
    }
  };
  const confirmDelete = async () => {
    if (!toDelete) return;
    setDeleting(true);
    try {
      await eventsApi.remove(toDelete.id);
      toast.success('Deleted.');
      setToDelete(null);
      await load();
    } catch (err) {
      toast.error(errorMessage(err));
    } finally {
      setDeleting(false);
    }

  };
  const filtered = Boolean(filters.type || filters.status || filters.when || filters.search || filters.mine);
  return (
    <>
      <PageHeader
        title="News and events"
        description="Everything shown on the website comes from here. Only published items are visible to visitors."
        actions={
          <>
            <Link href="/events/new?type=news" className={buttonClasses('outline', 'md')}>
              <Plus className="size-4" /> Add news
            </Link>
            <Link href="/events/new?type=event" className={buttonClasses('marker', 'md')}>
              <Plus className="size-4" /> Add event
            </Link>
          </>
        }
      />

      <div className="mb-6">
        <EventFilters value={filters} onChange={setFilters} />
      </div>

      {error && <Alert tone="error" className="mb-6">{error}</Alert>}

      {loading && !items.length ? (
        <PageSpinner label="Loading news and events" />
      ) : !items.length && !error ? (
        <div className="rounded-lg border border-dashed border-ink-soft/40 bg-sheet px-6 py-14 text-center">
          <Newspaper className="mx-auto size-10 text-ink-soft" strokeWidth={1.4} />
          <h2 className="mt-3 text-xl font-semibold">{filtered ? 'Nothing matches these filters' : 'Nothing here yet'}</h2>
          <p className="mt-1 text-ink-soft">{filtered ? 'Try removing a filter.' : 'Add the first news item or event to get started.'}</p>
        </div>
      ) : (
        <div className={loading ? 'opacity-60 transition-opacity' : 'transition-opacity'}>
          <EventsTable items={items} showAudit={isSuperAdmin} busyId={busyId} onToggle={toggle} onDelete={setToDelete} />
          {pagination && <Pager page={pagination.page} totalPages={pagination.totalPages} total={pagination.total} onPage={setPage} />}
        </div>
      )}

      <ConfirmDialog
        open={!!toDelete}
        danger
        title="Delete this item?"
        description={
          <>
            <span className="font-semibold text-ink">{toDelete?.title}</span> will be removed from the website for good. This cannot be undone. To hide it instead, unpublish it.
          </>
        }
        confirmLabel="Delete"
        loading={deleting}
        onConfirm={confirmDelete}
        onCancel={() => setToDelete(null)}
      />
    </>
  );
}