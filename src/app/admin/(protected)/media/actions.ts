'use server';

import { revalidatePath } from 'next/cache';
import { auth } from '@/auth';
import { uploadImage, deleteImage } from '@/lib/cloudinary';
import { insertMedia, deleteMediaRecord, getMedia } from '@/lib/media';
import { isUrlReferenced } from '@/lib/content';

export async function uploadMedia(formData: FormData) {
  const session = await auth();
  if (!session?.user) throw new Error('Not authenticated');

  const file = formData.get('file');
  const alt = String(formData.get('alt') ?? '');
  if (!(file instanceof File) || file.size === 0) {
    throw new Error('No file selected');
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const result = await uploadImage(buffer, file.name);

  await insertMedia({
    cloudinary_public_id: result.public_id,
    url: result.secure_url,
    filename: file.name,
    alt,
    width: result.width,
    height: result.height,
    bytes: result.bytes,
  });

  revalidatePath('/admin/media');
}

export async function checkMediaUsage(id: number): Promise<{ filename: string; url: string; inUse: boolean } | null> {
  const media = await getMedia(id);
  if (!media) return null;
  const inUse = await isUrlReferenced(media.url);
  return { filename: media.filename, url: media.url, inUse };
}

export async function deleteMedia(id: number) {
  const session = await auth();
  if (!session?.user) throw new Error('Not authenticated');

  const media = await getMedia(id);
  if (!media) return;

  await deleteImage(media.cloudinary_public_id);
  await deleteMediaRecord(id);

  revalidatePath('/admin/media');
}
