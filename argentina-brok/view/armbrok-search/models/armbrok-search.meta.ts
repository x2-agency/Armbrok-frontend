import type { Metadata } from 'next';

export const ARMBROK_SEARCH_META: Metadata = {
	title: 'Armbrok Search',
	metadataBase: process.env.WEBSITE_DOMAIN
		? new URL(`${process.env.WEBSITE_DOMAIN}`)
		: undefined,
};
