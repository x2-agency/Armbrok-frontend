import type { Metadata } from 'next';

export const INVESTOR_RELATIONS_META: Metadata = {
	title: 'Investor Relations',
	openGraph: {
		title: 'Investor Relations',
		images: '/assets/ogs/investor-relations.png',
		type: 'website',
	},
	metadataBase: process.env.WEBSITE_DOMAIN
		? new URL(`${process.env.WEBSITE_DOMAIN}`)
		: undefined,
};
