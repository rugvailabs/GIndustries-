import { notFound, redirect } from 'next/navigation';
import { checkMediaUsage, deleteMedia } from '../../actions';

export default async function ConfirmDeleteMediaPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const mediaId = Number(id);
  if (!Number.isFinite(mediaId)) notFound();

  const info = await checkMediaUsage(mediaId);
  if (!info) notFound();

  async function confirmDelete() {
    'use server';
    await deleteMedia(mediaId);
    redirect('/admin/media');
  }

  return (
    <div>
      <h1>Delete image</h1>
      <div className="admin-card">
        {/* eslint-disable-next-line @next/next/no-img-element -- plain confirmation preview, not a Next/Image-managed layout */}
        <img src={info.url} alt={info.filename} style={{ maxWidth: 320, display: 'block', marginBottom: '1rem' }} />
        <p style={{ marginBottom: '1rem' }}>
          <strong>{info.filename}</strong>
        </p>
        {info.inUse && (
          <div className="admin-error">
            This image is currently used on at least one page. Deleting it will break that page&apos;s image until
            you replace it there too.
          </div>
        )}
        <form action={confirmDelete} style={{ display: 'flex', gap: '0.6rem' }}>
          <button type="submit" className="admin-btn admin-btn-danger">
            Yes, delete permanently
          </button>
          <a href="/admin/media" className="admin-btn">Cancel</a>
        </form>
      </div>
    </div>
  );
}
