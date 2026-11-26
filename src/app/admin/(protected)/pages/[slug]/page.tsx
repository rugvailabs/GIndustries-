import { notFound } from 'next/navigation';
import { getRegistryEntry } from '@/content/registry';
import { getPageContent } from '@/lib/content';
import { listMedia } from '@/lib/media';
import ContentForm from '@/components/admin/ContentForm';

export default async function AdminPageEditor({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getRegistryEntry(slug);
  if (!entry) notFound();

  const [content, mediaOptions] = await Promise.all([
    getPageContent(slug, entry.defaults),
    listMedia(),
  ]);

  return (
    <div>
      <h1>{entry.label}</h1>
      <p className="lede">Changes save immediately and go live on the site — no rebuild needed.</p>
      <div className="admin-card">
        <ContentForm
          slug={slug}
          fields={entry.fields}
          initialValue={content as Record<string, unknown>}
          mediaOptions={mediaOptions}
        />
      </div>
    </div>
  );
}
