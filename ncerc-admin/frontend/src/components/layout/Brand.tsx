import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Brand({ tone = 'dark', href = '/', className }: { tone?: 'dark' | 'light'; href?: string; className?: string }) {
  const light = tone === 'light';
  return (
    <Link href={href} className={cn('inline-flex items-center gap-2.5', className)} aria-label="NCERC Admin home">
      <span
        className={cn(
          'flex size-9 items-center justify-center rounded-md font-display text-lg font-bold',
          light ? 'bg-marker text-ink' : 'bg-blueprint text-white',
        )}
        aria-hidden="true"
      >
        N
      </span>
      <span className={cn('font-display text-xl font-bold tracking-tight', light ? 'text-white' : 'text-ink')}>
        NCERC <span className={cn('font-medium', light ? 'text-white/70' : 'text-ink-soft')}>Admin</span>
      </span>
    </Link>
  );
}
