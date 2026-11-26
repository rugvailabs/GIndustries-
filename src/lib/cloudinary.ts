import { v2 as cloudinary, type UploadApiResponse } from 'cloudinary';
import { Readable } from 'node:stream';

let configured = false;

function ensureConfigured() {
  if (configured) return;
  const cloud_name = process.env.CLOUDINARY_CLOUD_NAME;
  const api_key = process.env.CLOUDINARY_API_KEY;
  const api_secret = process.env.CLOUDINARY_API_SECRET;
  if (!cloud_name || !api_key || !api_secret) {
    throw new Error('Cloudinary env vars are not set — see .env.example for CLOUDINARY_*.');
  }
  cloudinary.config({ cloud_name, api_key, api_secret, secure: true });
  configured = true;
}

export async function uploadImage(buffer: Buffer, filename: string): Promise<UploadApiResponse> {
  ensureConfigured();
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: 'gindustries', filename_override: filename, use_filename: true, unique_filename: true, resource_type: 'image' },
      (error, result) => {
        if (error || !result) return reject(error ?? new Error('Cloudinary upload returned no result'));
        resolve(result);
      },
    );
    Readable.from(buffer).pipe(stream);
  });
}

export async function deleteImage(publicId: string): Promise<void> {
  ensureConfigured();
  await cloudinary.uploader.destroy(publicId, { resource_type: 'image' });
}
