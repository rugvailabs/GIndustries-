import { cache } from 'react';
import { queryOne, query } from './db';

type ContentRow = { content: unknown };

/** Returns the saved override for a slug, or `defaults` if nothing has been saved yet.
 *  Memoized per request so multiple components reading the same slug (e.g. header+footer
 *  from the root layout) only hit the database once. */
export const getPageContent = cache(async function getPageContent<T>(slug: string, defaults: T): Promise<T> {
  const row = await queryOne<ContentRow>('SELECT content FROM page_content WHERE slug = $1', [slug]);
  return row ? (row.content as T) : defaults;
});

/** Raw (unvalidated) override, or null if the admin hasn't saved this page yet.
 *  Used by the admin form to know whether it's showing defaults or a saved override. */
export async function getRawPageContent(slug: string): Promise<unknown | null> {
  const row = await queryOne<ContentRow>('SELECT content FROM page_content WHERE slug = $1', [slug]);
  return row ? row.content : null;
}

export async function savePageContent(slug: string, content: unknown, updatedBy: string): Promise<void> {
  await query(
    `INSERT INTO page_content (slug, content, updated_at, updated_by)
     VALUES ($1, $2::jsonb, now(), $3)
     ON CONFLICT (slug) DO UPDATE SET content = $2::jsonb, updated_at = now(), updated_by = $3`,
    [slug, JSON.stringify(content), updatedBy],
  );
}

/** Returns true if `needle` (a media URL) appears anywhere in any saved page_content —
 *  used to warn before deleting a still-referenced image from the media library. */
export async function isUrlReferenced(url: string): Promise<boolean> {
  const rows = await query<{ slug: string }>(
    `SELECT slug FROM page_content WHERE content::text LIKE $1 LIMIT 1`,
    [`%${url}%`],
  );
  return rows.length > 0;
}
