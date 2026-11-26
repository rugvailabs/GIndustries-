'use server';

import { revalidatePath } from 'next/cache';
import { auth } from '@/auth';
import { createUser, setUserActive, resetPassword, listUsers } from '@/lib/users';

export async function addUser(formData: FormData) {
  const session = await auth();
  if (!session?.user) throw new Error('Not authenticated');

  const email = String(formData.get('email') ?? '').trim();
  const password = String(formData.get('password') ?? '');
  if (!email || password.length < 8) {
    throw new Error('Email and an 8+ character password are required');
  }

  await createUser(email, password);
  revalidatePath('/admin/users');
}

export async function toggleUserActive(formData: FormData) {
  const session = await auth();
  if (!session?.user) throw new Error('Not authenticated');

  const id = Number(formData.get('id'));
  const nextActive = formData.get('nextActive') === 'true';

  if (String(id) === session.user.id && !nextActive) {
    throw new Error("You can't deactivate your own account while logged in as it.");
  }
  if (!nextActive) {
    const users = await listUsers();
    const otherActive = users.filter((u) => u.id !== id && u.is_active);
    if (otherActive.length === 0) {
      throw new Error('At least one active admin must remain.');
    }
  }

  await setUserActive(id, nextActive);
  revalidatePath('/admin/users');
}

export async function adminResetPassword(formData: FormData) {
  const session = await auth();
  if (!session?.user) throw new Error('Not authenticated');

  const id = Number(formData.get('id'));
  const password = String(formData.get('password') ?? '');
  if (password.length < 8) {
    throw new Error('Password must be at least 8 characters');
  }

  await resetPassword(id, password);
  revalidatePath('/admin/users');
}
