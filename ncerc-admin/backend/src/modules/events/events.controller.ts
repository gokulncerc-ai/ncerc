import { asyncHandler } from '../../utils/asyncHandler';
import * as service from './events.service';
import { ListEventsQuery } from './events.validation';

export const list = asyncHandler(async (req, res) => {
  const { items, pagination } = await service.listEvents(req.user!, req.query as unknown as ListEventsQuery);
  res.json({ success: true, data: items, pagination });
});

export const getOne = asyncHandler(async (req, res) => {
  res.json({ success: true, data: { event: await service.getEvent(req.params.id, req.user!) } });
});

export const create = asyncHandler(async (req, res) => {
  const event = await service.createEvent(req.user!, req.body);
  res.status(201).json({ success: true, data: { event } });
});

export const update = asyncHandler(async (req, res) => {
  const event = await service.updateEvent(req.params.id, req.user!, req.body);
  res.json({ success: true, data: { event } });
});

export const updateStatus = asyncHandler(async (req, res) => {
  const event = await service.updateEventStatus(req.params.id, req.user!, req.body.status);
  res.json({ success: true, data: { event } });
});

export const remove = asyncHandler(async (req, res) => {
  await service.deleteEvent(req.params.id, req.user!);
  res.json({ success: true, message: 'Deleted' });
});
