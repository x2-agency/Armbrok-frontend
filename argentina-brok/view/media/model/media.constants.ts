import type { Metadata } from 'next';

export const MEDIA_META: Metadata = {
	title: 'Media',
	openGraph: {
		title: 'Media',
		images: '/assets/ogs/about-us.png',
		type: 'website',
	},
	metadataBase: process.env.WEBSITE_DOMAIN
		? new URL(`${process.env.WEBSITE_DOMAIN}`)
		: undefined,
};
