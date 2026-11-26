import { listMedia } from '@/lib/media';
import { uploadMedia } from './actions';

export default async function MediaLibraryPage() {
  const items = await listMedia();

  return (
    <div>
      <h1>Media Library</h1>
      <p className="lede">Images uploaded here can be picked for any image field across the site.</p>

      <div className="admin-card">
        <h2 style={{ marginBottom: '0.8rem' }}>Upload</h2>
        <form action={uploadMedia}>
          <div className="admin-field">
            <label htmlFor="file">Image file</label>
            <input id="file" name="file" type="file" accept="image/*" required />
          </div>
          <div className="admin-field">
            <label htmlFor="alt">Alt text</label>
            <input id="alt" name="alt" type="text" placeholder="Describe the image for accessibility and SEO" />
          </div>
          <button type="submit" className="admin-btn admin-btn-primary">Upload</button>
        </form>
      </div>

      <div className="admin-card">
        <h2 style={{ marginBottom: '0.8rem' }}>Library ({items.length})</h2>
        {items.length === 0 ? (
          <p>No uploads yet.</p>
        ) : (
          <div className="admin-media-grid">
            {items.map((item) => (
              <div key={item.id} className="admin-media-item">
                {/* eslint-disable-next-line @next/next/no-img-element -- plain thumbnail grid, not a Next/Image-managed layout */}
                <img src={item.url} alt={item.alt || item.filename} />
                <div className="admin-media-item-body">
                  <p>{item.filename}</p>
                  <a href={`/admin/media/${item.id}/delete`} className="admin-btn admin-btn-danger admin-btn-sm">
                    Delete
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
