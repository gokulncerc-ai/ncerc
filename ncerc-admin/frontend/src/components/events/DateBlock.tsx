import { Newspaper } from 'lucide-react';
import { cn } from '@/lib/utils';
import { dateParts } from '@/lib/utils';

/**
 * The tear-off date block: month strip on top, big day below. Events show their start date; news items,
 * which have no event date, show a newspaper block instead.
 */
export function DateBlock({ iso, size = 'md', className }: { iso?: string | null; size?: 'sm' | 'md' | 'lg'; className?: string }) {
  const parts = dateParts(iso);
  const dims = { sm: 'w-11', md: 'w-14', lg: 'w-[4.5rem]' }[size];
  const day = { sm: 'text-lg', md: 'text-2xl', lg: 'text-4xl' }[size];
  const month = { sm: 'text-[0.65rem]', md: 'text-xs', lg: 'text-sm' }[size];

  return (
    <div className={cn('shrink-0 overflow-hidden rounded-[5px] border border-rule bg-sheet text-center shadow-[0_1px_0_var(--color-rule)]', dims, className)} aria-hidden={!parts}>
      <div className={cn('py-0.5 font-semibold leading-tight text-white', parts ? 'bg-blueprint' : 'bg-marker text-ink', month)}>
        {parts ? parts.month : 'News'}
      </div>
      <div className={cn('flex items-center justify-center py-1 font-display font-bold leading-none text-ink', day)}>
        {parts ? parts.day : <Newspaper className={size === 'lg' ? 'size-9' : size === 'md' ? 'size-6' : 'size-5'} strokeWidth={1.75} />}
      </div>
    </div>
  );
}
