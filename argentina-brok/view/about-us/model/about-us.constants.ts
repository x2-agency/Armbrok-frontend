import type { Metadata } from 'next';

export const ABOUT_US_META: Metadata = {
	title: 'About us',
	openGraph: {
		title: 'About us',
		images: '/assets/ogs/about-us.png',
		type: 'website',
	},
	metadataBase: process.env.WEBSITE_DOMAIN
		? new URL(`${process.env.WEBSITE_DOMAIN}`)
		: undefined,
};
