import { defineRouting } from 'next-intl/routing';

export enum Locales {
	EN = 'en',
	RU = 'ru',
	AM = 'hy',
}

export const LANGUAGES = Object.values(Locales);

export const routing = defineRouting({
	// A list of all locales that are supported
	locales: Object.values(Locales),

	// Used when no locale matches
	defaultLocale: Locales.EN,
});
