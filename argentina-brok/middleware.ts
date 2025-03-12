import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { routing } from '@/i18n/routing';

const LANGUAGE_HEADER = 'Accept-Language';
const CURRENT_PATH_HEADER = 'x-current-path';

export function middleware(request: NextRequest) {
	const handleI18nRouting = createMiddleware(routing);
	const response = handleI18nRouting(request);

	if (!request.nextUrl.pathname.startsWith('/sitemap.xml')) {
		response.headers.set(CURRENT_PATH_HEADER, request.nextUrl.pathname);

		const language = request.cookies.get(LANGUAGE_HEADER);

		if (language) response.headers.set(LANGUAGE_HEADER, language.value);
	}

	return response;
}

export const config = {
	matcher: [
		'/',
		'/(ru|hy|en)/:path*',
		'/((?!api|_next/static|_next/image|favicon.ico|images|assets|sitemap.xml).*)',
	],
};
