import { NextFunction, Request, RequestHandler, Response } from 'express';

/** Forwards rejected promises to the error handler so controllers need no try/catch. */
export const asyncHandler =
  (fn: (req: Request, res: Response, next: NextFunction) => Promise<unknown> | unknown): RequestHandler =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
