import { redirect } from 'next/navigation';
import Link from 'next/link';
import { auth, signOut } from '@/auth';

export const metadata = { robots: { index: false, follow: false } };

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session?.user) {
    redirect('/admin/login');
  }

  async function logout() {
    'use server';
    await signOut({ redirectTo: '/admin/login' });
  }

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="brand">G Industries Admin</div>
        <nav className="admin-nav">
          <Link href="/admin">Dashboard</Link>
          <Link href="/admin/media">Media Library</Link>
          <Link href="/admin/users">Admin Users</Link>
          <Link href="/" className="admin-nav-view-site">View &amp; Edit Site</Link>
        </nav>
        <div className="admin-sidebar-footer">
          <span>{session.user.email}</span>
          <form action={logout}>
            <button type="submit">Log out</button>
          </form>
        </div>
      </aside>
      <main className="admin-main">{children}</main>
    </div>
  );
}
