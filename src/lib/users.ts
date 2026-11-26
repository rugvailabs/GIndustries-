import bcrypt from 'bcryptjs';
import { query, queryOne } from './db';

export type AdminUser = {
  id: number;
  email: string;
  is_active: boolean;
  must_change_password: boolean;
  created_at: string;
};

export async function listUsers(): Promise<AdminUser[]> {
  return query<AdminUser>(
    'SELECT id, email, is_active, must_change_password, created_at FROM users ORDER BY created_at ASC',
  );
}

export async function createUser(email: string, password: string): Promise<AdminUser> {
  const password_hash = await bcrypt.hash(password, 12);
  const row = await queryOne<AdminUser>(
    `INSERT INTO users (email, password_hash, must_change_password)
     VALUES ($1, $2, true)
     RETURNING id, email, is_active, must_change_password, created_at`,
    [email.toLowerCase().trim(), password_hash],
  );
  if (!row) throw new Error('Failed to create user');
  return row;
}

export async function setUserActive(id: number, isActive: boolean): Promise<void> {
  await query('UPDATE users SET is_active = $2 WHERE id = $1', [id, isActive]);
}

export async function resetPassword(id: number, newPassword: string): Promise<void> {
  const password_hash = await bcrypt.hash(newPassword, 12);
  await query(
    'UPDATE users SET password_hash = $2, must_change_password = true WHERE id = $1',
    [id, password_hash],
  );
}
