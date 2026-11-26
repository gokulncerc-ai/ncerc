import { asyncHandler } from '../../utils/asyncHandler';
import * as service from './public.service';
import { PublicListQuery } from './public.validation';

export const list = asyncHandler(async (req, res) => {
  const { items, pagination } = await service.listPublished(req.query as unknown as PublicListQuery);
  res.json({ success: true, data: items, pagination });
});

export const getBySlug = asyncHandler(async (req, res) => {
  res.json({ success: true, data: { event: await service.getPublishedBySlug(req.params.slug) } });
});
