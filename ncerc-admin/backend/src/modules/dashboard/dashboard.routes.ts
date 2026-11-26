import { Router } from 'express';
import { PERMISSIONS } from '../../constants/permissions';
import { authenticate } from '../../middlewares/authenticate';
import { authorize } from '../../middlewares/authorize';
import { stats } from './dashboard.controller';

const router = Router();

router.get('/stats', authenticate, authorize(PERMISSIONS.DASHBOARD_VIEW), stats);

export default router;
