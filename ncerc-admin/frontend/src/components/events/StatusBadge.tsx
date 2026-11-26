import { Star } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import type { EventStatus, EventType } from '@/types';

export function StatusBadge({ status }: { status: EventStatus }) {
  if (status === 'published') return <Badge tone="green">Published</Badge>;
  if (status === 'archived') return <Badge tone="amber">Archived</Badge>;
  return <Badge tone="neutral">Draft</Badge>;
}

export function TypeBadge({ type }: { type: EventType }) {
  return <Badge tone={type === 'event' ? 'blue' : 'amber'}>{type === 'event' ? 'Event' : 'News'}</Badge>;
}

export function FeaturedMark() {
  return (
    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#7a5600]" title="Featured on the website">
      <Star className="size-3.5 fill-marker text-marker-deep" />
      Featured
    </span>
  );
}
