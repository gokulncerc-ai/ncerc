import { z } from 'zod';
import { EVENT_STATUSES, EVENT_TYPES } from './event.model';
import { idParamSchema } from '../../utils/objectId';

const image = z.object({ url: z.string().url(), publicId: z.string().optional() });
const dateField = z.preprocess((v) => (v === '' ? null : v), z.coerce.date().nullable().optional());
const optionalUrl = z.preprocess((v) => (v === '' ? undefined : v), z.string().url().optional());

const eventFields = z.object({
  title: z.string().trim().min(3, 'Title is too short').max(200),
  type: z.enum(EVENT_TYPES),
  summary: z.string().trim().max(500).default(''),
  description: z.string().default(''),
  coverImage: image.nullable().optional(),
  gallery: z.array(image).max(20).default([]),
  venue: z.string().trim().max(200).optional(),
  eventDate: dateField,
  endDate: dateField,
  registrationUrl: optionalUrl,
  status: z.enum(EVENT_STATUSES).default('draft'),
  isFeatured: z.boolean().default(false),
});

type DateRange = { eventDate?: Date | null; endDate?: Date | null };
const checkDates = (v: DateRange, ctx: z.RefinementCtx) => {
  if (v.eventDate && v.endDate && v.endDate < v.eventDate)
    ctx.addIssue({ code: 'custom', path: ['endDate'], message: 'End date cannot be before start date' });
};

export const createEventSchema = {
  body: eventFields.superRefine((v, ctx) => {
    if (v.type === 'event' && !v.eventDate)
      ctx.addIssue({ code: 'custom', path: ['eventDate'], message: 'Event date is required for events' });
    checkDates(v, ctx);
  }),
};

// partial update: .partial() wraps defaults in optional(), so absent fields never overwrite stored values
export const updateEventSchema = {
  params: idParamSchema,
  body: eventFields
    .partial()
    .superRefine(checkDates)
    .refine((v) => Object.keys(v).length > 0, 'Nothing to update'),
};

export const updateStatusSchema = {
  params: idParamSchema,
  body: z.object({ status: z.enum(EVENT_STATUSES) }),
};

export const listEventsSchema = {
  query: z.object({
    type: z.enum(EVENT_TYPES).optional(),
    status: z.enum(EVENT_STATUSES).optional(),
    when: z.enum(['upcoming', 'past']).optional(),
    search: z.string().trim().max(100).optional(),
    mine: z.enum(['true', 'false']).optional(), // "true" = only my own events
    page: z.coerce.number().int().min(1).default(1),
    limit: z.coerce.number().int().min(1).max(100).default(10),
  }),
};
export type ListEventsQuery = z.infer<typeof listEventsSchema.query>;
export type CreateEventInput = z.infer<typeof createEventSchema.body>;
export type UpdateEventInput = z.infer<typeof updateEventSchema.body>;
