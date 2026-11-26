import { Router } from 'express';
import { publicLimiter } from '../../middlewares/rateLimiter';
import { validate } from '../../middlewares/validate';
import * as c from './public.controller';
import * as v from './public.validation';

const router = Router();

// read-only, no login. Short CDN/browser cache keeps load off the database.
router.use(publicLimiter, (_req, res, next) => {
  res.set('Cache-Control', 'public, max-age=60, s-maxage=60, stale-while-revalidate=120');
  next();
});

router.get('/events', validate(v.publicListSchema), c.list);
router.get('/events/:slug', validate(v.slugParamSchema), c.getBySlug);

export default router;
