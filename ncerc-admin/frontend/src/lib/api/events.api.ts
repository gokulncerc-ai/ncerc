import type { AdminEvent, EventStatus, EventType, ImageRef, Pagination } from '@/types';
import { api } from './client';

export interface EventListParams {
  type?: EventType;
  status?: EventStatus;
  when?: 'upcoming' | 'past';
  search?: string;
  /** true = only my own items */
  mine?: boolean;
  page?: number;
  limit?: number;
}

export interface EventInput {
  title: string;
  type: EventType;
  summary: string;
  description: string;
  coverImage: ImageRef | null;
  gallery: ImageRef[];
  venue: string;
  /** ISO string or null */
  eventDate: string | null;
  endDate: string | null;
  registrationUrl: string;
  status: EventStatus;
  isFeatured: boolean;
}

/** News and events CRUD. Backend: /api/events/* (the paths match events.routes.ts). */
export const eventsApi = {
  list: async (params: EventListParams = {}, signal?: AbortSignal): Promise<{ items: AdminEvent[]; pagination: Pagination }> => {
    const res = await api<AdminEvent[]>('/events/list-events', {
      query: { ...params, mine: params.mine ? 'true' : undefined },
      signal,
    });
    return { items: res.data, pagination: res.pagination! };
  },

  get: async (id: string) => (await api<{ event: AdminEvent }>(`/events/${id}/get-event`)).data.event,

  create: async (input: EventInput) =>
    (await api<{ event: AdminEvent }>('/events/create-events', { method: 'POST', body: input })).data.event,

  update: async (id: string, input: Partial<EventInput>) =>
    (await api<{ event: AdminEvent }>(`/events/${id}/event-update`, { method: 'PATCH', body: input })).data.event,

  /** Publish / unpublish / archive without opening the form. */
  setStatus: async (id: string, status: EventStatus) =>
    (await api<{ event: AdminEvent }>(`/events/${id}/update-status`, { method: 'PATCH', body: { status } })).data.event,

  remove: (id: string) => api(`/events/${id}/delete-event`, { method: 'DELETE' }),
};