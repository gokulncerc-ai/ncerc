'use client';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { UserPlus } from 'lucide-react';
import { RequireRole } from '@/components/auth/RequireRole';
import { AdminsTable, type AdminAction } from '@/components/admins/AdminsTable';
import { SetPasswordModal } from '@/components/admins/SetPasswordModal';
import { Pager } from '@/components/events/EventsTable';
import { PageHeader } from '@/components/layout/PageHeader';
import { Alert } from '@/components/ui/Alert';
import { buttonClasses } from '@/components/ui/Button';
import { ConfirmDialog } from '@/components/ui/ConfirmDialog';
import { PageSpinner } from '@/components/ui/Spinner';
import { useToast } from '@/context/ToastProvider';
import { useAuth } from '@/hooks/useAuth';
import { useDebounce } from '@/hooks/useDebounce';
import { useLatestRequest } from '@/hooks/useLatestRequest';
import { adminsApi } from '@/lib/api/admins.api';
import { errorMessage } from '@/lib/api/client';
import { cn } from '@/lib/utils';
import type { Pagination, Role, User, UserStatus } from '@/types';

const statusTabs: { value: UserStatus | ''; label: string }[] = [
  { value: '', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'pending', label: 'Waiting for approval' },
  { value: 'suspended', label: 'Suspended' },
];

function AdminsView() {
  const toast = useToast();
  const { user: me, isPrimary } = useAuth();
  const [role, setRole] = useState<Role>('admin');
  const [status, setStatus] = useState<UserStatus | ''>('');
  const [searchText, setSearchText] = useState('');
  const search = useDebounce(searchText);
  const begin = useLatestRequest();
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState<User[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [busyId, setBusyId] = useState<string | null>(null);
  const [confirm, setConfirm] = useState<{ action: 'suspend' | 'remove'; user: User } | null>(null);
  const [confirming, setConfirming] = useState(false);
  const [passwordFor, setPasswordFor] = useState<User | null>(null);

  useEffect(() => setPage(1), [role, status, search]);

  const load = useCallback(async () => {
    const isLatest = begin();
    setLoading(true);
    setError('');
    try {
      const res = await adminsApi.list({ role, status: status || undefined, search: search || undefined, page, limit: 15 });
      if (!isLatest()) return;
      setUsers(res.items);
      setPagination(res.pagination);
    } catch (err) {
      if (isLatest()) setError(errorMessage(err));
    } finally {
      if (isLatest()) setLoading(false);
    }
  }, [begin, role, status, search, page]);

  useEffect(() => {
    void load();
  }, [load]);

  const act = (action: AdminAction, user: User) => {
    if (action === 'password') return setPasswordFor(user);
    if (action === 'approve') return void approve(user);
    setConfirm({ action, user });
  };

  const approve = async (user: User) => {
    setBusyId(user.id);
    try {
      await adminsApi.approve(user.id);
      toast.success(`${user.name} can now sign in.`);
      await load();
    } catch (err) {
      toast.error(errorMessage(err));
    } finally {
      setBusyId(null);
    }
  };

  const runConfirmed = async () => {
    if (!confirm) return;
    setConfirming(true);
    try {
      if (confirm.action === 'suspend') await adminsApi.suspend(confirm.user.id);
      else await adminsApi.remove(confirm.user.id);
      toast.success(confirm.action === 'suspend' ? `${confirm.user.name} was suspended and signed out.` : `${confirm.user.name} was removed. Their news and events stay on the website.`);
      setConfirm(null);
      await load();
    } catch (err) {
      toast.error(errorMessage(err));
    } finally {
      setConfirming(false);
    }
  };

  return (
    <>
      <PageHeader
        title="Admins"
        description="Everyone who can sign in to this panel."
        actions={
          <Link href="/signup" className={buttonClasses('marker', 'md')}>
            <UserPlus className="size-4" /> Create account
          </Link>
        }
      />

      <div className="mb-6 flex flex-wrap items-center gap-4">
        <div role="tablist" aria-label="Account type" className="inline-flex rounded-md border border-rule bg-sheet p-0.5">
          {(['admin', 'super_admin'] as const).map((r) => (
            <button key={r} type="button" role="tab" aria-selected={role === r} onClick={() => setRole(r)} className={cn('rounded px-4 py-1.5 text-sm font-semibold transition-colors', role === r ? 'bg-blueprint text-white' : 'text-ink-soft hover:text-blueprint')}>
              {r === 'admin' ? 'Admins' : 'Super admins'}
            </button>
          ))}
        </div>
        <select aria-label="Status" value={status} onChange={(e) => setStatus(e.target.value as UserStatus | '')} className="h-10 rounded-md border border-rule bg-sheet px-3 text-sm focus:border-blueprint focus:outline-none focus:ring-2 focus:ring-blueprint/25">
          {statusTabs.map((t) => (
            <option key={t.label} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
        <input type="search" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search name or e-mail" aria-label="Search" className="h-10 min-w-56 flex-1 rounded-md border border-rule bg-sheet px-3 text-sm placeholder:text-ink-soft/70 focus:border-blueprint focus:outline-none focus:ring-2 focus:ring-blueprint/25 sm:max-w-xs" />
      </div>

      {error && <Alert tone="error" className="mb-6">{error}</Alert>}

      {loading && !users.length ? (
        <PageSpinner label="Loading accounts" />
      ) : !users.length ? (
        <p className="rounded-lg border border-dashed border-ink-soft/40 bg-sheet px-6 py-12 text-center text-ink-soft">No accounts match this view.</p>
      ) : (
        <div className={loading ? 'opacity-60 transition-opacity' : 'transition-opacity'}>
          <AdminsTable users={users} currentUserId={me?.id ?? ''} isPrimary={isPrimary} busyId={busyId} onAction={act} />
          {pagination && <Pager page={pagination.page} totalPages={pagination.totalPages} total={pagination.total} onPage={setPage} />}
        </div>
      )}

      <ConfirmDialog
        open={!!confirm}
        danger={confirm?.action === 'remove'}
        title={confirm?.action === 'suspend' ? `Suspend ${confirm.user.name}?` : `Remove ${confirm?.user.name}?`}
        description={
          confirm?.action === 'suspend'
            ? 'They are signed out at once and cannot sign in until you reactivate them.'
            : 'Their account is deleted for good. The news and events they added stay on the website.'
        }
        confirmLabel={confirm?.action === 'suspend' ? 'Suspend' : 'Remove'}
        loading={confirming}
        onConfirm={runConfirmed}
        onCancel={() => setConfirm(null)}
      />
      <SetPasswordModal target={passwordFor} onClose={() => setPasswordFor(null)} />
    </>
  );
}

export default function AdminsPage() {
  return (
    <RequireRole role="super_admin">
      <AdminsView />
    </RequireRole>
  );
}