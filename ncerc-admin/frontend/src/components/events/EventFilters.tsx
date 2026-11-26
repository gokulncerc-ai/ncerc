'use client';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { EventStatus, EventType } from '@/types';

export interface EventFilterState {
  type: EventType | '';
  status: EventStatus | '';
  when: 'upcoming' | 'past' | '';
  search: string;
  mine: boolean;
}

export const emptyFilters: EventFilterState = { type: '', status: '', when: '', search: '', mine: false };

const tabs: { value: EventFilterState['type']; label: string }[] = [
  { value: '', label: 'All' },
  { value: 'news', label: 'News' },
  { value: 'event', label: 'Events' },
];

const selectClass = 'h-10 rounded-md border border-rule bg-sheet px-3 text-sm text-ink focus:border-blueprint focus:outline-none focus:ring-2 focus:ring-blueprint/25';

export function EventFilters({ value, onChange }: { value: EventFilterState; onChange: (next: EventFilterState) => void }) {
  const set = <K extends keyof EventFilterState>(key: K, v: EventFilterState[K]) => onChange({ ...value, [key]: v });

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        <div role="tablist" aria-label="Type" className="inline-flex rounded-md border border-rule bg-sheet p-0.5">
          {tabs.map((t) => (
            <button
              key={t.label}
              type="button"
              role="tab"
              aria-selected={value.type === t.value}
              onClick={() => set('type', t.value)}
              className={cn('rounded px-4 py-1.5 text-sm font-semibold transition-colors', value.type === t.value ? 'bg-blueprint text-white' : 'text-ink-soft hover:text-blueprint')}
            >
              {t.label}
            </button>
          ))}
        </div>

        <label className="relative min-w-56 flex-1 sm:max-w-xs">
          <span className="sr-only">Search by title</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-ink-soft" />
          <input
            type="search"
            value={value.search}
            onChange={(e) => set('search', e.target.value)}
            placeholder="Search by title"
            className="h-10 w-full rounded-md border border-rule bg-sheet pl-9 pr-3 text-sm placeholder:text-ink-soft/70 focus:border-blueprint focus:outline-none focus:ring-2 focus:ring-blueprint/25"
          />
        </label>

        <select aria-label="Status" value={value.status} onChange={(e) => set('status', e.target.value as EventFilterState['status'])} className={selectClass}>
          <option value="">Any status</option>
          <option value="draft">Draft</option>
          <option value="published">Published</option>
          <option value="archived">Archived</option>
        </select>

        <select aria-label="When" value={value.when} onChange={(e) => set('when', e.target.value as EventFilterState['when'])} className={selectClass}>
          <option value="">Any date</option>
          <option value="upcoming">Upcoming events</option>
          <option value="past">Past events</option>
        </select>

        <label className="flex items-center gap-2 text-sm font-medium text-ink">
          <input type="checkbox" checked={value.mine} onChange={(e) => set('mine', e.target.checked)} className="size-4 accent-[var(--color-blueprint)]" />
          Only mine
        </label>
      </div>
    </div>
  );
}
