import type { Metadata } from 'next';

export const FUNDS_META: Metadata = {
	title: 'Funds',
	openGraph: {
		title: 'Funds',
		images: '/assets/ogs/funds.png',
		type: 'website',
	},
	metadataBase: process.env.NEXT_PUBLIC_HOST_URL
		? new URL(`${process.env.NEXT_PUBLIC_HOST_URL}`)
		: undefined,
};
