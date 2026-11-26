
'use client';

import Link from 'next/link';
import {
  Eye,
  EyeOff,
  Pencil,
  Trash2,
  Eye as ViewIcon,
} from 'lucide-react';

import { Button, buttonClasses } from '@/components/ui/Button';
import { formatDate } from '@/lib/utils';
import type { AdminEvent } from '@/types';

import { CoverThumb } from './CoverThumb';
import { DateBlock } from './DateBlock';
import {
  FeaturedMark,
  StatusBadge,
  TypeBadge,
} from './StatusBadge';

interface Props {
  items: AdminEvent[];

  /** Super admins also see who added / last edited each item */
  showAudit: boolean;

  busyId: string | null;

  onToggle: (item: AdminEvent) => void;

  onDelete: (item: AdminEvent) => void;
}

/**
 * Events table with cover images, event information,
 * status indicators, and admin actions.
 */
export function EventsTable({
  items,
  showAudit,
  busyId,
  onToggle,
  onDelete,
}: Props) {
  return (
    <ul className="divide-y divide-rule overflow-hidden rounded-lg border border-rule bg-sheet">

      {items.map((e) => {
        const published = e.status === 'published';

        const editedByOther =
          !!e.updatedBy &&
          !!e.createdBy &&
          e.updatedBy.email !== e.createdBy.email;

        return (
          <li
            key={e.id}
            className="
                            flex
                            flex-col
                            gap-4
                            p-4
                            sm:flex-row
                            sm:items-center
                            sm:gap-5
                        "
          >
            {/* Event Date */}
            <DateBlock
              iso={e.type === 'event' ? e.eventDate : null}
            />

            {/* Event Information */}
            <div className="min-w-0 flex-1">

              {/* Event Title */}
              <div className="flex flex-wrap items-center gap-2">

                <Link
                  href={`/events/${e.id}`}
                  className="
                                        font-display
                                        text-lg
                                        font-semibold
                                        leading-snug
                                        hover:text-blueprint
                                        hover:underline
                                    "
                >
                  {e.title}
                </Link>

              </div>

              {/* Event Details and Badges */}
              <div
                className="
                                    mt-1.5
                                    flex
                                    flex-wrap
                                    items-center
                                    gap-x-3
                                    gap-y-1.5
                                "
              >
                <TypeBadge type={e.type} />

                <StatusBadge status={e.status} />

                {e.isFeatured && <FeaturedMark />}

                {e.type === 'event' && e.venue && (
                  <span className="text-sm text-ink-soft">
                    {e.venue}
                  </span>
                )}

                {e.type === 'event' && e.eventDate && (
                  <span className="text-sm text-ink-soft">
                    {formatDate(e.eventDate, true)}
                  </span>
                )}
              </div>

              {/* Audit Information */}
              {showAudit && e.createdBy && (
                <p className="mt-1.5 text-sm text-ink-soft">
                  Added by {e.createdBy.name}

                  {editedByOther && e.updatedBy
                    ? `, last edited by ${e.updatedBy.name}`
                    : ''}
                </p>
              )}

            </div>

            {/* Event Cover Image */}
            <CoverThumb
              url={e.coverImage?.url ?? e.gallery?.[0]?.url}
              title={e.title}
              size="md"
            />

            {/* Event Actions */}
            <div
              className="
                                flex
                                shrink-0
                                flex-wrap
                                items-center
                                gap-2
                            "
            >

              {/* Publish / Unpublish */}
              {e.canEdit && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onToggle(e)}
                  loading={busyId === e.id}
                  aria-label={
                    published
                      ? `Unpublish ${e.title}`
                      : `Publish ${e.title}`
                  }
                >
                  {published ? (
                    <EyeOff className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )}

                  {published ? 'Unpublish' : 'Publish'}
                </Button>
              )}

              {/* Edit / View */}
              <Link
                href={`/events/${e.id}`}
                className={buttonClasses('outline', 'sm')}
                aria-label={`${e.canEdit ? 'Edit' : 'View'
                  } ${e.title}`}
              >
                {e.canEdit ? (
                  <Pencil className="size-4" />
                ) : (
                  <ViewIcon className="size-4" />
                )}

                {e.canEdit ? 'Edit' : 'View'}
              </Link>

              {/* Delete */}
              {e.canEdit && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onDelete(e)}
                  className="
                                        text-danger
                                        hover:bg-danger-soft
                                        hover:text-danger
                                    "
                  aria-label={`Delete ${e.title}`}
                >
                  <Trash2 className="size-4" />
                </Button>
              )}

            </div>
          </li>
        );
      })}

    </ul>
  );
}

/**
 * Pagination component
 */
export function Pager({
  page,
  totalPages,
  total,
  onPage,
}: {
  page: number;
  totalPages: number;
  total: number;
  onPage: (p: number) => void;
}) {
  if (totalPages <= 1) {
    return (
      <p className="mt-4 text-sm text-ink-soft">
        {total} item{total === 1 ? '' : 's'}
      </p>
    );
  }

  return (
    <div className="mt-5 flex items-center justify-between gap-4">

      {/* Page Information */}
      <p className="text-sm text-ink-soft">
        Page {page} of {totalPages}, {total} items
      </p>

      {/* Pagination Buttons */}
      <div className="flex gap-2">

        <Button
          variant="outline"
          size="sm"
          onClick={() => onPage(page - 1)}
          disabled={page <= 1}
        >
          Previous
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => onPage(page + 1)}
          disabled={page >= totalPages}
        >
          Next
        </Button>

      </div>

    </div>
  );
}