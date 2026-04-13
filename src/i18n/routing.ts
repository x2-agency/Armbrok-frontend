/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineRouting } from 'next-intl/routing';

export enum Locales {
	HY = 'hy',
	EN = 'en',
	RU = 'ru',
}

export const DEFAULT_LOCALE = Locales.EN;

export const LANGUAGES = Object.values(Locales);

export const getLocalePseudonim = (localeValue: string) => {
	const entries = Object.entries(Locales);
	return entries.find(([_, value]) => {
		return value === localeValue;
	})?.[0];
};

export const routing = defineRouting({
	// A list of all locales that are supported
	locales: Object.values(Locales),

	// Used when no locale matches
	defaultLocale: Locales.EN,
});
