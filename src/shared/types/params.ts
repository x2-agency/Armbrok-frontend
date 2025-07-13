import type { Locales } from '@/i18n/routing';

export type LocaleParams = {
	params: Promise<{ locale: keyof typeof Locales }>;
};

export type SlugParams = {
	params: Promise<{ slug: string }>;
};
