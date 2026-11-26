import { Pool, type QueryResultRow } from 'pg';

// Reuse one pool across hot-reloads in dev instead of leaking a new one per edit.
const globalForDb = globalThis as unknown as { pgPool?: Pool };

function createPool() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error('DATABASE_URL is not set — see .env.example for the admin CMS env vars.');
  }
  return new Pool({ connectionString, ssl: { rejectUnauthorized: false } });
}

export const pool = globalForDb.pgPool ?? createPool();
if (process.env.NODE_ENV !== 'production') globalForDb.pgPool = pool;

export async function query<T extends QueryResultRow = QueryResultRow>(
  text: string,
  params?: unknown[],
): Promise<T[]> {
  const result = await pool.query<T>(text, params);
  return result.rows;
}

export async function queryOne<T extends QueryResultRow = QueryResultRow>(
  text: string,
  params?: unknown[],
): Promise<T | null> {
  const rows = await query<T>(text, params);
  return rows[0] ?? null;
}
