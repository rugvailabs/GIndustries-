'use client';

import { useState } from 'react';
import type { FieldSchema } from '@/content/fields';
import { emptyListItem } from '@/content/fields';
import type { MediaItem } from '@/lib/media';

type JsonRecord = Record<string, unknown>;
type PathKey = string | number;

function getAt(obj: unknown, path: PathKey[]): unknown {
  return path.reduce<unknown>((acc, k) => {
    if (acc == null) return undefined;
    return (acc as JsonRecord | unknown[])[k as never];
  }, obj);
}

function setAt(obj: unknown, path: PathKey[], val: unknown): unknown {
  if (path.length === 0) return val;
  const [head, ...rest] = path;
  const isArr = Array.isArray(obj);
  const clone: JsonRecord | unknown[] = isArr ? [...(obj as unknown[])] : { ...((obj as JsonRecord) ?? {}) };
  (clone as JsonRecord)[head as string] = setAt((clone as JsonRecord)[head as string], rest, val);
  return clone;
}

function moveItem(arr: unknown[], from: number, to: number): unknown[] {
  const copy = [...arr];
  const [item] = copy.splice(from, 1);
  copy.splice(to, 0, item);
  return copy;
}

type ImageValue = { src: string; alt: string };

function ImageField({
  value,
  onChange,
  mediaOptions,
}: {
  value: ImageValue | undefined;
  onChange: (v: ImageValue) => void;
  mediaOptions: MediaItem[];
}) {
  const [uploading, setUploading] = useState(false);
  const v: ImageValue = value ?? { src: '', alt: '' };

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append('file', file);
      fd.append('alt', v.alt || '');
      const res = await fetch('/api/admin/media/upload', { method: 'POST', body: fd });
      if (!res.ok) throw new Error('Upload failed');
      const media: MediaItem = await res.json();
      onChange({ src: media.url, alt: v.alt || media.alt || '' });
    } catch {
      alert('Upload failed');
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  }

  return (
    <div style={{ display: 'grid', gap: '0.5rem' }}>
      {v.src && (
        // eslint-disable-next-line @next/next/no-img-element -- live preview of an arbitrary external URL being edited, not a static layout image
        <img src={v.src} alt={v.alt} style={{ maxWidth: 160, borderRadius: 4, border: '1px solid var(--line)' }} />
      )}
      <input type="text" placeholder="Image URL" value={v.src} onChange={(e) => onChange({ ...v, src: e.target.value })} />
      <input type="text" placeholder="Alt text" value={v.alt} onChange={(e) => onChange({ ...v, alt: e.target.value })} />
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
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
              if (m) onChange({ src: m.url, alt: v.alt || m.alt });
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
    </div>
  );
}

function FieldRenderer({
  fields,
  value,
  path,
  onChange,
  mediaOptions,
}: {
  fields: FieldSchema[];
  value: unknown;
  path: PathKey[];
  onChange: (path: PathKey[], value: unknown) => void;
  mediaOptions: MediaItem[];
}) {
  return (
    <>
      {fields.map((f) => {
        const fieldPath = [...path, f.key];
        const v = getAt(value, [f.key]);

        if (f.type === 'text' || f.type === 'url') {
          return (
            <div className="admin-field" key={f.key}>
              <label>{f.label}</label>
              <input
                type={f.type === 'url' ? 'url' : 'text'}
                value={typeof v === 'string' ? v : ''}
                onChange={(e) => onChange(fieldPath, e.target.value)}
              />
              {f.hint && <span className="hint">{f.hint}</span>}
            </div>
          );
        }
        if (f.type === 'textarea') {
          return (
            <div className="admin-field" key={f.key}>
              <label>{f.label}</label>
              <textarea value={typeof v === 'string' ? v : ''} onChange={(e) => onChange(fieldPath, e.target.value)} />
              {f.hint && <span className="hint">{f.hint}</span>}
            </div>
          );
        }
        if (f.type === 'number') {
          return (
            <div className="admin-field" key={f.key}>
              <label>{f.label}</label>
              <input
                type="number"
                value={typeof v === 'number' ? v : 0}
                onChange={(e) => onChange(fieldPath, Number(e.target.value))}
              />
              {f.hint && <span className="hint">{f.hint}</span>}
            </div>
          );
        }
        if (f.type === 'image') {
          return (
            <div className="admin-field" key={f.key}>
              <label>{f.label}</label>
              <ImageField value={v as ImageValue | undefined} onChange={(nv) => onChange(fieldPath, nv)} mediaOptions={mediaOptions} />
              {f.hint && <span className="hint">{f.hint}</span>}
            </div>
          );
        }
        if (f.type === 'object') {
          return (
            <fieldset key={f.key} className="admin-list-item">
              <legend><strong>{f.label}</strong></legend>
              <FieldRenderer fields={f.fields} value={v ?? {}} path={fieldPath} onChange={onChange} mediaOptions={mediaOptions} />
            </fieldset>
          );
        }
        // list
        const items: unknown[] = Array.isArray(v) ? v : [];
        return (
          <div className="admin-field" key={f.key}>
            <label>{f.label}</label>
            {items.map((item, i) => (
              <div className="admin-list-item" key={i}>
                <div className="admin-list-item-head">
                  <strong>#{i + 1}</strong>
                  <div className="admin-list-actions">
                    <button type="button" className="admin-btn admin-btn-sm" disabled={i === 0} onClick={() => onChange(fieldPath, moveItem(items, i, i - 1))}>↑</button>
                    <button type="button" className="admin-btn admin-btn-sm" disabled={i === items.length - 1} onClick={() => onChange(fieldPath, moveItem(items, i, i + 1))}>↓</button>
                    <button type="button" className="admin-btn admin-btn-sm admin-btn-danger" onClick={() => onChange(fieldPath, items.filter((_, idx) => idx !== i))}>Remove</button>
                  </div>
                </div>
                <FieldRenderer fields={f.itemFields} value={item} path={[...fieldPath, i]} onChange={onChange} mediaOptions={mediaOptions} />
              </div>
            ))}
            <button type="button" className="admin-btn" onClick={() => onChange(fieldPath, [...items, emptyListItem(f.itemFields)])}>
              {f.addLabel ?? `Add item`}
            </button>
          </div>
        );
      })}
    </>
  );
}

export default function ContentForm({
  slug,
  fields,
  initialValue,
  mediaOptions,
}: {
  slug: string;
  fields: FieldSchema[];
  initialValue: JsonRecord;
  mediaOptions: MediaItem[];
}) {
  const [value, setValue] = useState<JsonRecord>(initialValue);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  function onChange(path: PathKey[], newVal: unknown) {
    setValue((prev) => setAt(prev, path, newVal) as JsonRecord);
    setSuccess(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setSuccess(false);
    try {
      const res = await fetch(`/api/admin/content/${slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(value),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || 'Save failed');
      }
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Save failed');
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="admin-error">{error}</div>}
      {success && (
        <div className="admin-card" style={{ background: '#EAF7ED', borderColor: '#BFE6C8' }}>
          Saved — live on the site now.
        </div>
      )}
      <FieldRenderer fields={fields} value={value} path={[]} onChange={onChange} mediaOptions={mediaOptions} />
      <button type="submit" className="admin-btn admin-btn-primary" disabled={saving}>
        {saving ? 'Saving…' : 'Save changes'}
      </button>
    </form>
  );
}
