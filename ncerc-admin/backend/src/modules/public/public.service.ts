import { FilterQuery } from 'mongoose';
import { ApiError } from '../../utils/ApiError';
import { andFilters, paginationMeta, whenFilter } from '../../utils/query';
import { Event, EventLean, IEvent } from '../events/event.model';
import { PublicListQuery } from './public.validation';
const LIST_FIELDS = 'title slug type summary coverImage gallery venue eventDate endDate registrationUrl isFeatured publishedAt';
const DETAIL_FIELDS = `${LIST_FIELDS} description`;
/** Falls back to the first gallery photo when no cover image was set. The list hides the full gallery. */
const toPublicDTO = (e: EventLean, withGallery: boolean) => {
  const { _id, gallery, ...rest } = e;
  const coverImage = rest.coverImage?.url ? rest.coverImage : (gallery?.[0] ?? null);
  return { id: String(_id), ...rest, coverImage, ...(withGallery ? { gallery } : {}) };
};
export const listPublished = async ({ type, when, featured, page, limit }: PublicListQuery) => {
  const conditions: FilterQuery<IEvent>[] = [{ status: 'published' }];
  if (type) conditions.push({ type });
  if (when) conditions.push(whenFilter(when));
  if (featured === 'true') conditions.push({ isFeatured: true });
  const filter = andFilters(conditions);

  // upcoming: soonest first | past: most recent first | otherwise: newest published first
  const sort: Record<string, 1 | -1> =
    when === 'upcoming' ? { eventDate: 1 } : when === 'past' ? { eventDate: -1 } : { publishedAt: -1 };

  const [items, total] = await Promise.all([
    Event.find(filter)
      .select(LIST_FIELDS)
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(limit)
      .lean<EventLean[]>(),
    Event.countDocuments(filter),
  ]);
  return { items: items.map((e) => toPublicDTO(e, false)), pagination: paginationMeta(page, limit, total) };
};
export const getPublishedBySlug = async (slug: string) => {
  const event = await Event.findOne({ slug, status: 'published' }).select(DETAIL_FIELDS).lean<EventLean>();
  if (!event) throw new ApiError(404, 'Not found');
  return toPublicDTO(event, true);
};