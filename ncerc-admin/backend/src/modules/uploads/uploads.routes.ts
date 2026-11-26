import { Router } from 'express';
import { PERMISSIONS } from '../../constants/permissions';
import { authenticate } from '../../middlewares/authenticate';
import { authorize } from '../../middlewares/authorize';
import { uploadLimiter } from '../../middlewares/rateLimiter';
import { uploadImage } from '../../middlewares/upload';
import * as c from './uploads.controller';

const router = Router();

router.post('/image', authenticate, authorize(PERMISSIONS.UPLOADS_CREATE), uploadLimiter, uploadImage, c.uploadImage);

export default router;
