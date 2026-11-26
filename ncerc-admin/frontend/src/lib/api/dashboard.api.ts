import type { AdminEvent } from '@/types';
import { api } from './client';

export interface DashboardStats {
  events: {
    total: number;
    news: number;
    events: number;
    published: number;
    drafts: number;
    archived: number;
    upcomingPublished: number;
    mine: number;
  };
  recent: AdminEvent[];
  /** super admins only */
  admins?: { active: number; pending: number; suspended: number; total: number };
}

export const dashboardApi = {
  stats: async () => (await api<DashboardStats>('/dashboard/stats')).data,
};
