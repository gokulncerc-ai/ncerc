import { api } from './client';

export interface UploadedImage {
  url: string;
  publicId: string;
  width?: number;
  height?: number;
}

export const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg'];
export const MAX_IMAGE_MB = 5;

/** Image upload (stored on Cloudinary by the backend). Backend: POST /api/uploads/image, field "image". */
export const uploadsApi = {
  uploadImage: async (file: File): Promise<UploadedImage> => {
    const form = new FormData();
    form.append('image', file);
    return (await api<UploadedImage>('/uploads/image', { method: 'POST', form })).data;
  },
};
