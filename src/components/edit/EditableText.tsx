'use client';

import { useState } from 'react';
import { useEditMode } from './EditModeProvider';

export default function EditableText({
  slug,
  path,
  multiline,
  numeric,
  children,
}: {
  slug: string;
  path: string;
  multiline?: boolean;
  numeric?: boolean;
  children: string | number;
}) {
  const { editing, patchField } = useEditMode();
  const [value, setValue] = useState(children);
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState(String(value));
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!editing) {
    return <>{value}</>;
  }

  async function handleSave() {
    setSaving(true);
    setError(null);
    try {
      const newValue = numeric ? Number(draft) || 0 : draft;
      await patchField(slug, path, newValue);
      setValue(newValue);
      setOpen(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Save failed');
    } finally {
      setSaving(false);
    }
  }

  return (
    <span className="editable-text-wrap">
      <span
        className="editable-text"
        onClick={() => {
          setDraft(String(value));
          setError(null);
          setOpen(true);
        }}
      >
        {value}
      </span>
      {open && (
        <span className="edit-popover" onClick={(e) => e.stopPropagation()}>
          {error && <span className="edit-popover-error">{error}</span>}
          {multiline ? (
            <textarea value={draft} onChange={(e) => setDraft(e.target.value)} autoFocus rows={4} />
          ) : (
            <input
              type={numeric ? 'number' : 'text'}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              autoFocus
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSave();
                if (e.key === 'Escape') setOpen(false);
              }}
            />
          )}
          <span className="edit-popover-actions">
            <button type="button" className="admin-btn admin-btn-sm admin-btn-primary" onClick={handleSave} disabled={saving}>
              {saving ? 'Saving…' : 'Save'}
            </button>
            <button type="button" className="admin-btn admin-btn-sm" onClick={() => setOpen(false)}>Cancel</button>
          </span>
        </span>
      )}
    </span>
  );
}
