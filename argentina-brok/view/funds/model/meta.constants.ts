import type { Metadata } from 'next';

export const FUNDS_META: Metadata = {
	title: 'Funds',
	openGraph: {
		title: 'Funds',
		images: '/assets/ogs/funds.png',
		type: 'website',
	},
	metadataBase: process.env.WEBSITE_DOMAIN
		? new URL(`${process.env.WEBSITE_DOMAIN}`)
		: undefined,
};
