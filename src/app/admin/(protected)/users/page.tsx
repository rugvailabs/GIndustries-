import { auth } from '@/auth';
import { listUsers } from '@/lib/users';
import { addUser, toggleUserActive, adminResetPassword } from './actions';
import PasswordInput from '@/components/admin/PasswordInput';

export default async function AdminUsersPage() {
  const session = await auth();
  const users = await listUsers();

  return (
    <div>
      <h1>Admin Users</h1>
      <p className="lede">Anyone listed here can log in to this dashboard and edit the site.</p>

      <div className="admin-card">
        <h2 style={{ marginBottom: '0.8rem' }}>Add admin</h2>
        <form action={addUser}>
          <div className="admin-field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />
          </div>
          <div className="admin-field">
            <label htmlFor="password">Temporary password</label>
            <PasswordInput id="password" name="password" required minLength={8} />
            <span className="hint">At least 8 characters. They should change it after first login.</span>
          </div>
          <button type="submit" className="admin-btn admin-btn-primary">Add admin</button>
        </form>
      </div>

      <div className="admin-card">
        <h2 style={{ marginBottom: '0.8rem' }}>All admins</h2>
        <div className="admin-table-scroll">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Status</th>
              <th>Reset password</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>
                  {u.email}
                  {u.id.toString() === session?.user?.id && ' (you)'}
                </td>
                <td>{u.is_active ? 'Active' : 'Deactivated'}</td>
                <td>
                  <form action={adminResetPassword} style={{ display: 'flex', gap: '0.4rem' }}>
                    <input type="hidden" name="id" value={u.id} />
                    <PasswordInput name="password" placeholder="New password" minLength={8} required />
                    <button type="submit" className="admin-btn admin-btn-sm">Reset</button>
                  </form>
                </td>
                <td>
                  <form action={toggleUserActive}>
                    <input type="hidden" name="id" value={u.id} />
                    <input type="hidden" name="nextActive" value={(!u.is_active).toString()} />
                    <button type="submit" className={`admin-btn admin-btn-sm${u.is_active ? ' admin-btn-danger' : ''}`}>
                      {u.is_active ? 'Deactivate' : 'Reactivate'}
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}
