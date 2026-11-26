import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { uploadImage } from '@/lib/cloudinary';
import { insertMedia } from '@/lib/media';

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const formData = await req.formData();
  const file = formData.get('file');
  const alt = String(formData.get('alt') ?? '');

  if (!(file instanceof File) || file.size === 0) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const result = await uploadImage(buffer, file.name);

  const media = await insertMedia({
    cloudinary_public_id: result.public_id,
    url: result.secure_url,
    filename: file.name,
    alt,
    width: result.width,
    height: result.height,
    bytes: result.bytes,
  });

  return NextResponse.json(media);
}
