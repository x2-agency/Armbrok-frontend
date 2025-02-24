import type { Metadata } from 'next';

export const INVESTOR_RELATIONS_META: Metadata = {
	title: 'Investor Relations',
	openGraph: {
		title: 'Investor Relations',
		images: '/assets/ogs/investor-relations.png',
		type: 'website',
	},
	metadataBase: process.env.NEXT_PUBLIC_HOST_URL
		? new URL(`${process.env.NEXT_PUBLIC_HOST_URL}`)
		: undefined,
};
