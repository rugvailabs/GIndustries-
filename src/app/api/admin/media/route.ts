import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { listMedia } from '@/lib/media';

export async function GET() {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const items = await listMedia();
  return NextResponse.json(items);
}
