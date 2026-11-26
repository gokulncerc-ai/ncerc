import type { RequestHandler } from 'express';
import multer from 'multer';
import { env } from '../config/env';
import { ApiError } from '../utils/ApiError';

const ALLOWED = new Set(['image/jpeg', 'image/png', 'image/webp']);
const MAX_BYTES = env.MAX_IMAGE_SIZE_MB * 1024 * 1024;

const multerUpload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: MAX_BYTES, files: 1 },
  fileFilter: (_req, file, cb) => {
    if (!ALLOWED.has(file.mimetype)) {
      return cb(new ApiError(400, 'Only JPG, PNG or WEBP images are allowed'));
    }
    cb(null, true);
  },
}).single('image');

/**
 * Keeps the file in memory (size limit from MAX_IMAGE_SIZE_MB) and streams it to Cloudinary
 * from the controller. Multer's own errors become clean 4xx responses instead of 500s.
 */
export const uploadImage: RequestHandler = (req, res, next) => {
  multerUpload(req, res, (err: unknown) => {
    if (!err) return next();

    if (err instanceof multer.MulterError) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        return next(new ApiError(413, `Image is too large (max ${env.MAX_IMAGE_SIZE_MB} MB)`));
      }
      if (err.code === 'LIMIT_UNEXPECTED_FILE') {
        return next(new ApiError(400, 'Unexpected file field. Use the field name "image"'));
      }
      return next(new ApiError(400, err.message));
    }

    return next(err);
  });
};