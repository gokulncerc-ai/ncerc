// Import env first so .env is loaded before the Cloudinary SDK reads process.env
import { env, cloudinaryConfig } from './env';
import { v2 as cloudinary, UploadApiOptions, UploadApiResponse } from 'cloudinary';
import { cloudinaryEnabled } from './env';
import { ApiError } from '../utils/ApiError';

if (cloudinaryConfig) {
  // Explicit config overrides anything the SDK auto-read from CLOUDINARY_URL
  cloudinary.config({
    cloud_name: cloudinaryConfig.cloudName,
    api_key: cloudinaryConfig.apiKey,
    api_secret: cloudinaryConfig.apiSecret,
    secure: true,
  });
}

type CloudinaryError = { message?: string; http_code?: number };

/** Cloudinary rejects with a plain object (not an Error), so convert it to an ApiError. */
const toUploadError = (error: unknown): ApiError => {
  console.error('Cloudinary upload failed:', error);

  const { http_code: status } = (error ?? {}) as CloudinaryError;
  if (status === 401 || status === 403) {
    return new ApiError(502, 'Image storage is misconfigured. Check the Cloudinary credentials on the server.');
  }
  return new ApiError(502, 'Image upload failed. Please try again.');
};

export interface UploadOptions {
  /** Appended to CLOUDINARY_FOLDER, e.g. "avatars" -> "<folder>/avatars" */
  subfolder?: string;
  transformation?: UploadApiOptions['transformation'];
}

export const uploadImageBuffer = (buffer: Buffer, options: UploadOptions = {}): Promise<UploadApiResponse> =>
  new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: options.subfolder ? `${env.CLOUDINARY_FOLDER}/${options.subfolder}` : env.CLOUDINARY_FOLDER,
        resource_type: 'image',
        ...(options.transformation ? { transformation: options.transformation } : {}),
      },
      (error, result) => {
        if (error || !result) return reject(toUploadError(error));
        resolve(result);
      },
    );
    stream.end(buffer);
  });

/** Best-effort delete; never throws (an orphaned image is not worth failing a request). */
export const deleteImage = async (publicId?: string | null): Promise<void> => {
  if (!cloudinaryEnabled || !publicId) return;
  try {
    await cloudinary.uploader.destroy(publicId, { resource_type: 'image', invalidate: true });
  } catch (err) {
    console.warn('Cloudinary delete failed:', publicId, err);
  }
};