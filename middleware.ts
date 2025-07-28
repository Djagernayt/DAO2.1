import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { languages, fallbackLng, cookieName } from '@/lib/i18n/settings'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Проверяем, есть ли локаль в URL
  const pathnameHasLocale = languages.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Получаем предпочитаемую локаль
  const locale = request.cookies.get(cookieName)?.value || fallbackLng
  
  // Редирект на URL с локалью
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)']
}