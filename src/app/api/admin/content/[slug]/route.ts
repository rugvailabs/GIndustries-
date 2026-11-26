import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { auth } from '@/auth';
import { getRegistryEntry } from '@/content/registry';
import { getPageContent, savePageContent } from '@/lib/content';

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getRegistryEntry(slug);
  if (!entry) {
    return NextResponse.json({ error: 'Unknown content slug' }, { status: 404 });
  }
  const content = await getPageContent(slug, entry.defaults);
  return NextResponse.json({ content });
}

export async function PUT(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { slug } = await params;
  const entry = getRegistryEntry(slug);
  if (!entry) {
    return NextResponse.json({ error: 'Unknown content slug' }, { status: 404 });
  }

  const body = await req.json().catch(() => null);
  if (body === null) {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const parsed = entry.schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues.map((i) => `${i.path.join('.')}: ${i.message}`).join('; ') }, { status: 400 });
  }

  await savePageContent(slug, parsed.data, session.user.email ?? session.user.id);

  if (entry.revalidateLayout) {
    revalidatePath('/', 'layout');
  }
  for (const path of entry.revalidatePaths) {
    revalidatePath(path);
  }

  return NextResponse.json({ ok: true });
}
