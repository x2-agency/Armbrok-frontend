import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { routing } from '@/i18n/routing';

const LANGUAGE_HEADER = 'Accept-Language';
const CURRENT_PATH_HEADER = 'x-current-path';

export function middleware(request: NextRequest) {
	const handleI18nRouting = createMiddleware(routing);
	const response = handleI18nRouting(request);

	response.headers.set(CURRENT_PATH_HEADER, request.nextUrl.pathname);

	const language = request.cookies.get(LANGUAGE_HEADER);

	if (language) response.headers.set(LANGUAGE_HEADER, language.value);

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
		'/',
		'/(ru|hy|en)/:path*',
		'/((?!api|_next/static|_next/image|favicon.ico|images|assets).*)',
	],
};
