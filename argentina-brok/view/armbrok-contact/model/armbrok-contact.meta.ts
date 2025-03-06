import type { Metadata } from 'next';

export const ARMBROK_CONTACT_META: Metadata = {
	title: 'Armbrok Contact Page',
	metadataBase: process.env.WEBSITE_DOMAIN
		? new URL(`${process.env.WEBSITE_DOMAIN}`)
		: undefined,
};
