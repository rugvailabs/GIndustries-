'use client';

import { createContext, useCallback, useContext, useRef, useState } from 'react';
import { SessionProvider, useSession } from 'next-auth/react';
import { setAt, parsePath } from '@/lib/objectPath';

type EditModeContextValue = {
  isAdmin: boolean;
  editing: boolean;
  toggleEditing: () => void;
  patchField: (slug: string, path: string, value: unknown) => Promise<void>;
};

const EditModeContext = createContext<EditModeContextValue | null>(null);

export function useEditMode(): EditModeContextValue {
  const ctx = useContext(EditModeContext);
  if (!ctx) {
    throw new Error('useEditMode must be used within EditModeProvider');
  }
  return ctx;
}

function EditModeInner({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const isAdmin = status === 'authenticated' && !!session?.user;
  const [editing, setEditing] = useState(false);
  const cacheRef = useRef<Record<string, unknown>>({});

  const patchField = useCallback(async (slug: string, path: string, value: unknown) => {
    let current = cacheRef.current[slug];
    if (current === undefined) {
      const res = await fetch(`/api/admin/content/${slug}`);
      if (!res.ok) throw new Error('Failed to load current content');
      const body = await res.json();
      current = body.content;
    }
    const updated = setAt(current, parsePath(path), value);
    const res = await fetch(`/api/admin/content/${slug}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    });
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      throw new Error(body.error || 'Save failed');
    }
    cacheRef.current[slug] = updated;
  }, []);

  const toggleEditing = useCallback(() => setEditing((v) => !v), []);

  return (
    <EditModeContext.Provider value={{ isAdmin, editing, toggleEditing, patchField }}>
      <div data-edit-mode={editing ? 'true' : 'false'}>
        {children}
        {isAdmin && (
          <>
            {editing && (
              <div className="edit-mode-banner">
                Editing — click any text or image to change it.{' '}
                <a href="/admin" target="_blank" rel="noopener noreferrer">Open full editor</a>
              </div>
            )}
            <button type="button" className="edit-mode-toggle" onClick={toggleEditing}>
              {editing ? 'Done Editing' : '✏ Edit Page'}
            </button>
          </>
        )}
      </div>
    </EditModeContext.Provider>
  );
}

/**
 * Determines admin status client-side (NextAuth's useSession, via a background
 * fetch to /api/auth/session) rather than server-side with auth() — reading
 * cookies in a shared layout would force every public page into full dynamic
 * SSR just to show an "Edit Page" button, losing static generation site-wide.
 */
export default function EditModeProvider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <EditModeInner>{children}</EditModeInner>
    </SessionProvider>
  );
}
