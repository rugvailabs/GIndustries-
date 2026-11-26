import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { authConfig } from './auth.config';
import { queryOne } from '@/lib/db';

type DbUser = { id: number; email: string; password_hash: string; is_active: boolean };

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: { email: {}, password: {} },
      async authorize(credentials) {
        const email = typeof credentials?.email === 'string' ? credentials.email.toLowerCase().trim() : '';
        const password = typeof credentials?.password === 'string' ? credentials.password : '';
        if (!email || !password) return null;

        const user = await queryOne<DbUser>(
          'SELECT id, email, password_hash, is_active FROM users WHERE email = $1',
          [email],
        );
        if (!user || !user.is_active) return null;

        const valid = await bcrypt.compare(password, user.password_hash);
        if (!valid) return null;

        return { id: String(user.id), email: user.email };
      },
    }),
  ],
});
