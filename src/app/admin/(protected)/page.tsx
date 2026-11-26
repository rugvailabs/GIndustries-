import Link from 'next/link';
import { auth } from '@/auth';
import { CONTENT_REGISTRY } from '@/content/registry';

export default async function AdminDashboard() {
  const session = await auth();
  const globalEntries = CONTENT_REGISTRY.filter((e) => e.group === 'global');
  const pageEntries = CONTENT_REGISTRY.filter((e) => e.group === 'page');

  return (
    <div>
      <h1>Dashboard</h1>
      <p className="lede">Signed in as {session?.user?.email}.</p>

      <div className="admin-card">
        <h2 style={{ marginBottom: '0.8rem' }}>Site-wide</h2>
        {globalEntries.length === 0 ? (
          <p>Header and footer editing are coming in the next phase.</p>
        ) : (
          <div className="admin-grid">
            {globalEntries.map((e) => (
              <Link key={e.slug} href={`/admin/pages/${e.slug}`} className="admin-grid-link">
                <h3>{e.label}</h3>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="admin-card">
        <h2 style={{ marginBottom: '0.8rem' }}>Pages</h2>
        {pageEntries.length === 0 ? (
          <p>Pages will appear here as they&apos;re made editable, one at a time.</p>
        ) : (
          <div className="admin-grid">
            {pageEntries.map((e) => (
              <Link key={e.slug} href={`/admin/pages/${e.slug}`} className="admin-grid-link">
                <h3>{e.label}</h3>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="admin-card">
        <h2 style={{ marginBottom: '0.8rem' }}>Tools</h2>
        <div className="admin-grid">
          <Link href="/admin/media" className="admin-grid-link">
            <h3>Media Library</h3>
            <p>Upload, browse, and delete images.</p>
          </Link>
          <Link href="/admin/users" className="admin-grid-link">
            <h3>Admin Users</h3>
            <p>Manage who can log in to this dashboard.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
