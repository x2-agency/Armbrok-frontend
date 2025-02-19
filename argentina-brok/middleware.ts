import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { LOCALES, DEFAULT_LOCALE } from './website-locale';

export function middleware(req: NextRequest) {
	const { pathname } = req.nextUrl; // Extracts the pathname from the request URL.

	// Check if the pathname already starts with a supported locale.
	if (LOCALES.some(locale => pathname.startsWith(`/${locale}`))) {
		return NextResponse.next();
	}

	// Get the browser's language from the 'Accept-Language' header.
	const acceptLanguage = req.headers.get('accept-language');
	const browserLocale = acceptLanguage
		? acceptLanguage.split(',')[0].split('-')[0] // Get the primary language (e.g., 'en' from 'en-US').
		: DEFAULT_LOCALE;

	// Check if the browser's language is supported, otherwise default to the fallback locale.
	const locale = LOCALES.includes(browserLocale)
		? browserLocale
		: DEFAULT_LOCALE;

	// Redirect the user to the corresponding localized URL (e.g., '/en', '/fr', etc.).
	return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url));
}

export const config = {
	matcher: '/',
};
