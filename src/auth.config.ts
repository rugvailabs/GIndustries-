import type { NextAuthConfig } from 'next-auth';

/**
 * Edge-safe base config — no Node-only imports (pg, bcryptjs) here.
 * Used directly by middleware.ts (Edge runtime) and spread into the
 * full config in auth.ts (Node runtime, adds the Credentials provider).
 */
export const authConfig: NextAuthConfig = {
  trustHost: true, // required off Vercel (e.g. Railway) where there's no automatic trusted-host env var
  session: { strategy: 'jwt' },
  pages: { signIn: '/admin/login' },
  providers: [],
  callbacks: {
    session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
};
