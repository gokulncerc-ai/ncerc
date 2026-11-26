import { hasPermission, PERMISSIONS } from '../../constants/permissions';
import { ROLES } from '../../constants/roles';
import { asyncHandler } from '../../utils/asyncHandler';
import { whenFilter } from '../../utils/query';
import { Event } from '../events/event.model';
import { listEvents } from '../events/events.service';
import { User } from '../users/user.model';

export const stats = asyncHandler(async (req, res) => {
  const viewer = req.user!;

  const [total, news, events, published, drafts, archived, upcoming, mine, recent] = await Promise.all([
    Event.countDocuments(),
    Event.countDocuments({ type: 'news' }),
    Event.countDocuments({ type: 'event' }),
    Event.countDocuments({ status: 'published' }),
    Event.countDocuments({ status: 'draft' }),
    Event.countDocuments({ status: 'archived' }),
    Event.countDocuments({ type: 'event', status: 'published', ...whenFilter('upcoming') }),
    Event.countDocuments({ createdBy: viewer.id }),
    listEvents(viewer, { page: 1, limit: 5 }),
  ]);

  const data: Record<string, unknown> = {
    events: { total, news, events, published, drafts, archived, upcomingPublished: upcoming, mine },
    recent: recent.items,
  };

  if (hasPermission(viewer.role, PERMISSIONS.ADMINS_MANAGE)) {
    const [active, pending, suspended] = await Promise.all([
      User.countDocuments({ role: ROLES.ADMIN, status: 'active' }),
      User.countDocuments({ role: ROLES.ADMIN, status: 'pending' }),
      User.countDocuments({ role: ROLES.ADMIN, status: 'suspended' }),
    ]);
    data.admins = { active, pending, suspended, total: active + pending + suspended };
  }

  res.json({ success: true, data });
});
