import { Router } from 'express';
import { PERMISSIONS } from '../../constants/permissions';
import { authenticate } from '../../middlewares/authenticate';
import { authorize } from '../../middlewares/authorize';
import { validate } from '../../middlewares/validate';
import { idParamSchema } from '../../utils/objectId';
import * as c from './events.controller';
import * as v from './events.validation';

const router = Router();

router.use(authenticate);
router.get('/list-events', authorize(PERMISSIONS.EVENTS_READ), validate(v.listEventsSchema), c.list);
router.post('/create-events', authorize(PERMISSIONS.EVENTS_CREATE), validate(v.createEventSchema), c.create);
router.get('/:id/get-event', authorize(PERMISSIONS.EVENTS_READ), validate({ params: idParamSchema }), c.getOne);
// edit / publish / delete: must be the owner (or super admin) - enforced in events.service
router.patch('/:id/update-status', authorize(PERMISSIONS.EVENTS_MANAGE_OWN), validate(v.updateStatusSchema), c.updateStatus);
router.patch('/:id/event-update', authorize(PERMISSIONS.EVENTS_MANAGE_OWN), validate(v.updateEventSchema), c.update);
router.delete('/:id/delete-event', authorize(PERMISSIONS.EVENTS_MANAGE_OWN), validate({ params: idParamSchema }), c.remove);
export default router;
