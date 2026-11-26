import { redirect } from 'next/navigation';
import { auth } from '@/auth';
import { authenticate } from './actions';
import PasswordInput from '@/components/admin/PasswordInput';

export const metadata = { title: 'Admin Login — G Industries', robots: { index: false, follow: false } };

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const session = await auth();
  if (session?.user) {
    redirect('/admin');
  }

  const { error } = await searchParams;

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <h1>G Industries Admin</h1>
        <p className="sub">Sign in to edit site content, images, and pages.</p>
        {error && <div className="admin-error">Invalid email or password.</div>}
        <form action={authenticate}>
          <div className="admin-field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required autoComplete="username" />
          </div>
          <div className="admin-field">
            <label htmlFor="password">Password</label>
            <PasswordInput id="password" name="password" required autoComplete="current-password" />
          </div>
          <button type="submit" className="admin-btn admin-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
