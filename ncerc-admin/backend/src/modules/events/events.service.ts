import { FilterQuery, Types } from 'mongoose';
import { deleteImage } from '../../config/cloudinary';
import { hasPermission, PERMISSIONS } from '../../constants/permissions';
import { ApiError } from '../../utils/ApiError';
import { andFilters, escapeRegex, paginationMeta, whenFilter } from '../../utils/query';
import { slugify } from '../../utils/slugify';
import { Event, EventDoc, EventLean, EventStatus, IEvent } from './event.model';
import { CreateEventInput, ListEventsQuery, UpdateEventInput } from './events.validation';

type Viewer = Express.User;

// ---------- helpers ----------
const ownerIdOf = (e: { createdBy: unknown }): string => {
  const c = e.createdBy as { _id?: Types.ObjectId } | Types.ObjectId;
  return String((c as { _id?: Types.ObjectId })?._id ?? c);
};

const canModify = (viewer: Viewer, e: { createdBy: unknown }): boolean =>
  hasPermission(viewer.role, PERMISSIONS.EVENTS_MANAGE_ANY) ||
  (hasPermission(viewer.role, PERMISSIONS.EVENTS_MANAGE_OWN) && ownerIdOf(e) === viewer.id);

const assertCanModify = (viewer: Viewer, e: { createdBy: unknown }) => {
  if (!canModify(viewer, e)) throw new ApiError(403, 'You can only edit or delete your own news and events');
};

const uniqueSlug = async (title: string): Promise<string> => {
  const base = slugify(title);
  let slug = base;
  let n = 1;
  while (await Event.exists({ slug })) slug = `${base}-${++n}`;
  return slug;
};

type Img = { url: string; publicId?: string };

/** No cover chosen? The first gallery image becomes the cover. */
const withCover = <T extends { coverImage?: Img | null; gallery?: Img[] }>(v: T): T => {
  if (v.coverImage?.url) return v;
  const first = v.gallery?.[0];
  return first ? ({ ...v, coverImage: { url: first.url, publicId: first.publicId } } as T) : v;
};

/** Shapes an event for the admin portal. Only super admin sees createdBy / updatedBy. */
const toAdminDTO = (e: EventLean & { createdAt: Date; updatedAt: Date }, viewer: Viewer) => {
  const { _id, createdBy, updatedBy, __v, ...rest } = e as EventLean & { __v?: number; createdAt: Date; updatedAt: Date };
  const dto: Record<string, unknown> = { id: String(_id), ...rest, canEdit: canModify(viewer, e) };
  if (hasPermission(viewer.role, PERMISSIONS.EVENTS_VIEW_AUDIT)) {
    dto.createdBy = createdBy;
    dto.updatedBy = updatedBy;
  }
  return dto;
};

const findLean = (id: string | Types.ObjectId, viewer: Viewer) => {
  const q = Event.findById(id);
  if (hasPermission(viewer.role, PERMISSIONS.EVENTS_VIEW_AUDIT)) q.populate('createdBy updatedBy', 'name email');
  return q.lean<EventLean & { createdAt: Date; updatedAt: Date }>();
};

// ---------- queries ----------
export const listEvents = async (viewer: Viewer, query: ListEventsQuery) => {
  const { type, status, when, search, mine, page, limit } = query;
  const conditions: FilterQuery<IEvent>[] = [];

  if (type) conditions.push({ type });
  if (status) conditions.push({ status });
  if (when) conditions.push(whenFilter(when));
  if (mine === 'true') conditions.push({ createdBy: viewer.id });
  if (search) {
    const rx = new RegExp(escapeRegex(search), 'i');
    conditions.push({ $or: [{ title: rx }, { summary: rx }] });
  }
  const filter = andFilters(conditions);

  const sort: Record<string, 1 | -1> =
    when === 'upcoming' ? { eventDate: 1 } : when === 'past' ? { eventDate: -1 } : { createdAt: -1 };

  const q = Event.find(filter)
    .sort(sort)
    .skip((page - 1) * limit)
    .limit(limit);
  if (hasPermission(viewer.role, PERMISSIONS.EVENTS_VIEW_AUDIT)) q.populate('createdBy updatedBy', 'name email');

  const [items, total] = await Promise.all([
    q.lean<(EventLean & { createdAt: Date; updatedAt: Date })[]>(),
    Event.countDocuments(filter),
  ]);

  return { items: items.map((e) => toAdminDTO(e, viewer)), pagination: paginationMeta(page, limit, total) };
};

export const getEvent = async (id: string, viewer: Viewer) => {
  const event = await findLean(id, viewer);
  if (!event) throw new ApiError(404, 'Event not found');
  return toAdminDTO(event, viewer);
};

// ---------- commands ----------
export const createEvent = async (viewer: Viewer, input: CreateEventInput) => {
  const event = await Event.create({
    ...withCover(input),
    slug: await uniqueSlug(input.title),
    createdBy: viewer.id,
    updatedBy: viewer.id,
    publishedAt: input.status === 'published' ? new Date() : null,
  });
  return getEvent(event.id, viewer);
};

const loadForModify = async (id: string, viewer: Viewer): Promise<EventDoc> => {
  const event = await Event.findById(id);
  if (!event) throw new ApiError(404, 'Event not found');
  assertCanModify(viewer, event);
  return event;
};

const applyStatus = (event: EventDoc, status: EventStatus) => {
  event.status = status;
  if (status === 'published' && !event.publishedAt) event.publishedAt = new Date();
};

export const updateEvent = async (id: string, viewer: Viewer, input: UpdateEventInput) => {
  const event = await loadForModify(id, viewer);

  const { status, ...fields } = input;
  const oldCover = event.coverImage?.publicId;

  event.set(fields); // slug is intentionally NOT regenerated, so published URLs never break
  if (!event.coverImage?.url && event.gallery.length) {
    const first = event.gallery[0];
    event.coverImage = { url: first.url, publicId: first.publicId };
  }
  if (status) applyStatus(event, status);
  event.updatedBy = new Types.ObjectId(viewer.id);
  await event.save(); // schema validators run here (event date required, end >= start)

  // never delete a cover that is still the new cover or still in the gallery
  const stillUsed =
    !!oldCover && (oldCover === event.coverImage?.publicId || event.gallery.some((g) => g.publicId === oldCover));
  if (oldCover && !stillUsed) void deleteImage(oldCover);
  return getEvent(event.id, viewer);
};

export const updateEventStatus = async (id: string, viewer: Viewer, status: EventStatus) => {
  const event = await loadForModify(id, viewer);
  applyStatus(event, status);
  event.updatedBy = new Types.ObjectId(viewer.id);
  await event.save();
  return getEvent(event.id, viewer);
};

export const deleteEvent = async (id: string, viewer: Viewer) => {
  const event = await loadForModify(id, viewer);
  const publicIds = [
    ...new Set([event.coverImage?.publicId, ...event.gallery.map((g) => g.publicId)].filter(Boolean)),
  ] as string[];
  await event.deleteOne();
  publicIds.forEach((p) => void deleteImage(p));
};
