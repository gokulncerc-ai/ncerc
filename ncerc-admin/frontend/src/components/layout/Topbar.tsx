'use client';
import { LogOut, Menu } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/hooks/useAuth';
import { initials } from '@/lib/utils';

export function Topbar({ onMenu }: { onMenu: () => void }) {
  const { user, isPrimary, logout } = useAuth();
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b border-rule bg-sheet/95 px-4 backdrop-blur sm:px-8">
      <button type="button" onClick={onMenu} className="-ml-2 rounded-md p-2 text-ink-soft hover:bg-paper lg:hidden" aria-label="Open menu">
        <Menu className="size-5" />
      </button>
      <div className="ml-auto flex items-center gap-3">
        <div className="hidden text-right leading-tight sm:block">
          <p className="text-sm font-semibold">{user?.name}</p>
          <p className="text-xs text-ink-soft">{user?.email}</p>
        </div>
        <span className="flex size-9 items-center justify-center rounded-full bg-blueprint-soft text-sm font-bold text-blueprint" aria-hidden="true">
          {user ? initials(user.name) : ''}
        </span>
        <Badge tone={user?.role === 'super_admin' ? 'amber' : 'blue'}>{isPrimary ? 'Primary super admin' : user?.role === 'super_admin' ? 'Super admin' : 'Admin'}</Badge>
        <Button variant="ghost" size="sm" onClick={logout} aria-label="Sign out">
          <LogOut className="size-4" />
          <span className="hidden sm:inline">Sign out</span>
        </Button>
      </div>
    </header>
  );
}
