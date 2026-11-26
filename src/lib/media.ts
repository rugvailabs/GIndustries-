import { query, queryOne } from './db';

export type MediaItem = {
  id: number;
  cloudinary_public_id: string;
  url: string;
  filename: string;
  alt: string;
  width: number | null;
  height: number | null;
  bytes: number | null;
  created_at: string;
};

export async function listMedia(): Promise<MediaItem[]> {
  return query<MediaItem>('SELECT * FROM media ORDER BY created_at DESC');
}

export async function getMedia(id: number): Promise<MediaItem | null> {
  return queryOne<MediaItem>('SELECT * FROM media WHERE id = $1', [id]);
}

export async function insertMedia(item: {
  cloudinary_public_id: string;
  url: string;
  filename: string;
  alt?: string;
  width?: number;
  height?: number;
  bytes?: number;
}): Promise<MediaItem> {
  const row = await queryOne<MediaItem>(
    `INSERT INTO media (cloudinary_public_id, url, filename, alt, width, height, bytes)
     VALUES ($1, $2, $3, $4, $5, $6, $7)
     RETURNING *`,
    [item.cloudinary_public_id, item.url, item.filename, item.alt ?? '', item.width ?? null, item.height ?? null, item.bytes ?? null],
  );
  if (!row) throw new Error('Failed to insert media record');
  return row;
}

export async function deleteMediaRecord(id: number): Promise<void> {
  await query('DELETE FROM media WHERE id = $1', [id]);
}
