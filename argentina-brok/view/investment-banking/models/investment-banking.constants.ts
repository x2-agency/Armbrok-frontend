import type { Metadata } from 'next';

export const INVESTMENT_BANKING_META: Metadata = {
	title: 'Investment Banking',
	openGraph: {
		title: 'Investment Banking',
		images: '/assets/ogs/investment-banking.png',
		type: 'website',
	},
	metadataBase: process.env.WEBSITE_DOMAIN
		? new URL(`${process.env.WEBSITE_DOMAIN}`)
		: undefined,
};
