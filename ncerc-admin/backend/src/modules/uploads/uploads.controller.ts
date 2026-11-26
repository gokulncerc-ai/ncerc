import { uploadImageBuffer } from '../../config/cloudinary';
import { cloudinaryEnabled } from '../../config/env';
import { ApiError } from '../../utils/ApiError';
import { asyncHandler } from '../../utils/asyncHandler';

export const uploadImage = asyncHandler(async (req, res) => {
  if (!cloudinaryEnabled) throw new ApiError(503, 'Image uploads are not configured (set the CLOUDINARY_* variables)');
  if (!req.file) throw new ApiError(400, 'No image file received (field name: "image")');

  const result = await uploadImageBuffer(req.file.buffer);
  res.status(201).json({
    success: true,
    data: { url: result.secure_url, publicId: result.public_id, width: result.width, height: result.height },
  });
});
