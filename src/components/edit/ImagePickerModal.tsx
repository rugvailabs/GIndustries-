'use client';

import { useEffect, useState } from 'react';
import type { MediaItem } from '@/lib/media';

export type ImageValue = { src: string; alt: string };

export default function ImagePickerModal({
  value,
  onSave,
  onClose,
}: {
  value: ImageValue;
  onSave: (v: ImageValue) => Promise<void> | void;
  onClose: () => void;
}) {
  const [draft, setDraft] = useState<ImageValue>(value);
  const [mediaOptions, setMediaOptions] = useState<MediaItem[]>([]);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/admin/media')
      .then((r) => (r.ok ? r.json() : []))
      .then(setMediaOptions)
      .catch(() => {});
  }, []);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError(null);
    try {
      const fd = new FormData();
      fd.append('file', file);
      fd.append('alt', draft.alt || '');
      const res = await fetch('/api/admin/media/upload', { method: 'POST', body: fd });
      if (!res.ok) throw new Error('Upload failed');
      const media: MediaItem = await res.json();
      setDraft({ src: media.url, alt: draft.alt || media.alt || '' });
    } catch {
      setError('Upload failed');
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  }

  async function handleSave() {
    setSaving(true);
    setError(null);
    try {
      await onSave(draft);
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Save failed');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="edit-modal-backdrop" onClick={onClose}>
      <div className="edit-modal-panel" onClick={(e) => e.stopPropagation()}>
        <h3>Change image</h3>
        {error && <div className="admin-error">{error}</div>}
        {draft.src && (
          // eslint-disable-next-line @next/next/no-img-element -- live preview of an arbitrary external URL being edited
          <img src={draft.src} alt={draft.alt} className="edit-modal-preview" />
        )}
        <div className="admin-field">
          <label>Alt text</label>
          <input type="text" value={draft.alt} onChange={(e) => setDraft((d) => ({ ...d, alt: e.target.value }))} />
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <label className="admin-btn admin-btn-sm" style={{ cursor: 'pointer' }}>
            {uploading ? 'Uploading…' : 'Upload new'}
            <input type="file" accept="image/*" onChange={handleUpload} style={{ display: 'none' }} disabled={uploading} />
          </label>
          {mediaOptions.length > 0 && (
            <select
              defaultValue=""
              onChange={(e) => {
                if (!e.target.value) return;
                const m = mediaOptions.find((item) => String(item.id) === e.target.value);
                if (m) setDraft({ src: m.url, alt: draft.alt || m.alt });
                e.target.value = '';
              }}
            >
              <option value="" disabled>Choose existing…</option>
              {mediaOptions.map((m) => (
                <option key={m.id} value={m.id}>{m.filename}</option>
              ))}
            </select>
          )}
        </div>
        <div className="edit-modal-actions">
          <button type="button" className="admin-btn admin-btn-primary" onClick={handleSave} disabled={saving || uploading}>
            {saving ? 'Saving…' : 'Save'}
          </button>
          <button type="button" className="admin-btn" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
