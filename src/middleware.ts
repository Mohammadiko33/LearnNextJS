import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const isLoggedIn = false // این‌جا باید بررسی توکن یا کوکی انجام بدی

  if (!isLoggedIn && request.nextUrl.pathname.startsWith("/about")) {
    return NextResponse.redirect(new URL("http://localhost:3000/login"))
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/about",
}
