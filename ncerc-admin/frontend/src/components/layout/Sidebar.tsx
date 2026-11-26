'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Newspaper, UserCircle, UserPlus, Users } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { UserAvatar } from '@/components/account/UserAvatar';
import { cn, roleLabel } from '@/lib/utils';
import { Brand } from './Brand';

const items = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard, superOnly: false },
  { href: '/events', label: 'News and events', icon: Newspaper, superOnly: false },
  { href: '/admins', label: 'Admins', icon: Users, superOnly: true },
  { href: '/signup', label: 'Create account', icon: UserPlus, superOnly: true },
  { href: '/profile', label: 'My profile', icon: UserCircle, superOnly: false },
];

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const { isSuperAdmin, user } = useAuth();

  return (
    <nav className="flex h-full flex-col gap-8 px-4 py-5" aria-label="Main">
      <Brand href="/dashboard" className="px-2" />
      {user && (
        <Link
          href="/profile"
          onClick={onNavigate}
          aria-label="Open my profile"
          className="flex items-center gap-3 rounded-md border border-rule bg-sheet px-3 py-2.5 transition-colors hover:border-blueprint/40"
        >
          <UserAvatar name={user.name} src={user.avatar} className="size-10 text-sm" />
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold text-ink">{user.name}</span>
            <span className="block truncate text-xs text-ink-soft">{roleLabel(user.role)}</span>
          </span>
        </Link>
      )}
      <ul className="space-y-1">
        {items
          .filter((i) => !i.superOnly || isSuperAdmin)
          .map(({ href, label, icon: Icon }) => {
            const active = pathname === href || (href !== '/dashboard' && pathname.startsWith(`${href}/`));
            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={onNavigate}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'flex items-center gap-3 rounded-md border-l-[3px] px-3 py-2.5 text-[0.95rem] font-medium transition-colors',
                    active ? 'border-blueprint bg-blueprint-soft text-blueprint' : 'border-transparent text-ink-soft hover:bg-paper hover:text-ink',
                  )}
                >
                  <Icon className="size-[1.1rem]" strokeWidth={1.9} />
                  {label}
                </Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
}
