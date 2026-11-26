import { FilterQuery } from 'mongoose';

export const escapeRegex = (s: string): string => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export const paginationMeta = (page: number, limit: number, total: number) => ({
  page,
  limit,
  total,
  totalPages: Math.max(1, Math.ceil(total / limit)),
});

/**
 * upcoming = ends (or starts, when no end date) now or later
 * past     = already started and already finished
 * Items without an eventDate (plain news) match neither.
 */
export const whenFilter = (when: 'upcoming' | 'past', now = new Date()): FilterQuery<any> =>
  when === 'upcoming'
    ? { $or: [{ endDate: { $gte: now } }, { endDate: null, eventDate: { $gte: now } }] }
    : { eventDate: { $lt: now }, $or: [{ endDate: null }, { endDate: { $lt: now } }] };

export const andFilters = (conditions: FilterQuery<any>[]): FilterQuery<any> =>
  conditions.length ? { $and: conditions } : {};
