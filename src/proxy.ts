import NextAuth from 'next-auth';
import { NextResponse } from 'next/server';
import { authConfig } from './auth.config';

// Edge-safe NextAuth instance (no Credentials provider / DB access here — see auth.ts
// for the full Node-runtime config used by route handlers and server components).
const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const isLoggedIn = !!req.auth?.user;
  const isAdminApi = pathname.startsWith('/api/admin');
  const isProtectedPage = pathname.startsWith('/admin') && pathname !== '/admin/login';

  if (isLoggedIn || (!isAdminApi && !isProtectedPage)) {
    return NextResponse.next();
  }
  if (isAdminApi) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  return NextResponse.redirect(new URL('/admin/login', req.nextUrl.origin));
});

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};
