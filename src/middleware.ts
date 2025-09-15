/* eslint-disable @typescript-eslint/no-explicit-any */

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { Locales } from '@/i18n/routing';
import { routing } from '@/i18n/routing';

const LANGUAGE_HEADER = 'Accept-Language';
const CURRENT_PATH_HEADER = 'x-current-path';

const PUBLIC_LOCALES = Object.values(Locales);
const countryToLocale: Record<string, string> = {
	RU: Locales.RU,
	AM: Locales.AM,
};

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;
	const hasLocale = PUBLIC_LOCALES.some(locale =>
		pathname.startsWith(`/${locale}`)
	);

	if (!hasLocale) {
		const cookieLang = request.cookies.get(LANGUAGE_HEADER)?.value;

		let autoLocale: string | undefined;

		if (cookieLang && PUBLIC_LOCALES.includes(cookieLang as any)) {
			autoLocale = cookieLang;
		} else {
			const country = request.headers.get('x-vercel-ip-country');
			autoLocale =
				country && countryToLocale[country]
					? countryToLocale[country]
					: Locales.EN;
		}

		const redirectUrl = new URL(`/${autoLocale}${pathname}`, request.url);

		return NextResponse.redirect(redirectUrl);
	}

	const handleI18nRouting = createMiddleware(routing);
	const response = handleI18nRouting(request);

	if (
		!(pathname.startsWith('/sitemap.xml') && pathname.startsWith('/robots.txt'))
	) {
		response.headers.set(CURRENT_PATH_HEADER, pathname);

		const language = request.cookies.get(LANGUAGE_HEADER);
		if (language) response.headers.set(LANGUAGE_HEADER, language.value);
	}

	return response;
}

export const config = {
	matcher: [
		'/',
		'/(ru|hy|en)/:path*',
		'/((?!api|_next/static|_next/image|favicon.ico|images|assets|sitemap.xml|robots.txt).*)',
	],
};
