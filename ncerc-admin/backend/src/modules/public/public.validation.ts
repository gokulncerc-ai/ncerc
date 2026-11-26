import { z } from 'zod';
import { EVENT_TYPES } from '../events/event.model';

export const publicListSchema = {
  query: z.object({
    type: z.enum(EVENT_TYPES).optional(),
    when: z.enum(['upcoming', 'past']).optional(),
    featured: z.enum(['true', 'false']).optional(),
    page: z.coerce.number().int().min(1).default(1),
    limit: z.coerce.number().int().min(1).max(50).default(9),
  }),
};

export type PublicListQuery = z.infer<typeof publicListSchema.query>;

export const slugParamSchema = {
  params: z.object({ slug: z.string().trim().min(1).max(120).regex(/^[a-z0-9-]+$/) }),
};
