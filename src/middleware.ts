import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const guestOnlyRoutes = ['/auth'];
const protectedRoutes = ['/dashboard'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('authToken')?.value;

  if (
    protectedRoutes.some((route) => pathname.startsWith(route)) &&
    !token
  ) {
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  if (
    guestOnlyRoutes.some((route) => pathname.startsWith(route)) &&
    token
  ) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/auth/:path*'],
};
