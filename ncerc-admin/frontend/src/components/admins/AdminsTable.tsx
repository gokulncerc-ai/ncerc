'use client';
import { Check, KeyRound, Pause, Trash2 } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { formatDate, initials } from '@/lib/utils';
import type { User } from '@/types';

export type AdminAction = 'approve' | 'suspend' | 'remove' | 'password';

interface Props {
  users: User[];
  currentUserId: string;
  isPrimary: boolean;
  busyId: string | null;
  onAction: (action: AdminAction, user: User) => void;
}

const statusTone = { active: 'green', pending: 'amber', suspended: 'red' } as const;

export function AdminsTable({ users, currentUserId, isPrimary, busyId, onAction }: Props) {
  return (
    <ul className="divide-y divide-rule overflow-hidden rounded-lg border border-rule bg-sheet">
      {users.map((u) => {
        const self = u.id === currentUserId;
        const isAdminRole = u.role === 'admin'; // the API lets super admins manage normal admins only
        return (
          <li key={u.id} className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-blueprint-soft font-display font-bold text-blueprint" aria-hidden="true">
              {initials(u.name)}
            </span>
            <div className="min-w-0 flex-1">
              <p className="flex flex-wrap items-center gap-2">
                <span className="font-semibold">{u.name}</span>
                {self && <Badge tone="blue">You</Badge>}
                <Badge tone={statusTone[u.status]}>{u.status[0].toUpperCase() + u.status.slice(1)}</Badge>
              </p>
              <p className="truncate text-sm text-ink-soft">{u.email}{u.phone ? `, ${u.phone}` : ''}</p>
              <p className="text-xs text-ink-soft">{u.lastLoginAt ? `Last signed in ${formatDate(u.lastLoginAt, true)}` : 'Has not signed in yet'}</p>
            </div>

            {!self && (
              <div className="flex flex-wrap items-center gap-2">
                {isAdminRole && u.status !== 'active' && (
                  <Button size="sm" variant="primary" onClick={() => onAction('approve', u)} loading={busyId === u.id}>
                    <Check className="size-4" />
                    {u.status === 'pending' ? 'Approve' : 'Reactivate'}
                  </Button>
                )}
                {isAdminRole && u.status === 'active' && (
                  <Button size="sm" variant="outline" onClick={() => onAction('suspend', u)} loading={busyId === u.id}>
                    <Pause className="size-4" />
                    Suspend
                  </Button>
                )}
                {isPrimary && (
                  <Button size="sm" variant="outline" onClick={() => onAction('password', u)}>
                    <KeyRound className="size-4" />
                    Set password
                  </Button>
                )}
                {isAdminRole && (
                  <Button size="sm" variant="ghost" onClick={() => onAction('remove', u)} className="text-danger hover:bg-danger-soft hover:text-danger" aria-label={`Remove ${u.name}`}>
                    <Trash2 className="size-4" />
                  </Button>
                )}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
