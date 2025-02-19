import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { LOCALES, DEFAULT_LOCALE } from './website-locale';

export function middleware(req: NextRequest) {
	const { pathname } = req.nextUrl; // Extracts the pathname from the request URL.

	// Exclude static files and public files from middleware processing.
	if (
		pathname.startsWith('/_next/') || // Next.js static files
		pathname.startsWith('/static/') || // Custom static files (if any)
		pathname.startsWith('/favicon.ico') || // Favicon
		pathname.startsWith('/images/') || // Images from the public folder
		pathname.startsWith('/assets/') // Other assets from the public folder
	) {
		return NextResponse.next(); // Skip middleware for static files.
	}

	// Check if the pathname already starts with a supported locale.
	if (LOCALES.some(locale => pathname.startsWith(`/${locale}`))) {
		return NextResponse.next(); // If the locale is already in the URL, proceed without changes.
	}

	// Get the locale from cookies (if set by the user).
	const cookieLocale = req.cookies.get('locale')?.value;

	// Validate the cookie locale: if it's not in LOCALES, use the default locale.
	const validCookieLocale =
		cookieLocale && LOCALES.includes(cookieLocale) ? cookieLocale : null;

	// Get the browser's language from the 'Accept-Language' header.
	const acceptLanguage = req.headers.get('accept-language');
	const browserLocale = acceptLanguage
		? acceptLanguage.split(',')[0].split('-')[0] // Get the primary language (e.g., 'en' from 'en-US').
		: DEFAULT_LOCALE;

	// Determine the locale to use:
	// 1. Use the valid locale from cookies if it exists.
	// 2. Otherwise, use the browser's locale if it's supported.
	// 3. Fallback to the default locale.
	const locale =
		validCookieLocale ||
		(LOCALES.includes(browserLocale) ? browserLocale : DEFAULT_LOCALE);

	// Redirect the user to the corresponding localized URL (e.g., '/en', '/fr', etc.).
	const response = NextResponse.redirect(
		new URL(`/${locale}${pathname}`, req.url)
	);

	// Set the locale in cookies if it's not already set or if the current cookie is invalid.
	if (!validCookieLocale) {
		response.cookies.set('locale', locale, {
			path: '/', // Cookie is available for all paths.
			maxAge: 60 * 60 * 24 * 365, // 1 year expiration.
			sameSite: 'strict', // Prevents the cookie from being sent with cross-site requests.
			httpOnly: true, // Prevents client-side JavaScript from accessing the cookie.
		});
	}

	return response;
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for:
		 * - API routes (e.g., /api/...)
		 * - Static files (e.g., /_next/static/...)
		 * - Files in the public folder (e.g., /favicon.ico)
		 */
		'/((?!api|_next/static|_next/image|favicon.ico|images|assets).*)',
	],
};
