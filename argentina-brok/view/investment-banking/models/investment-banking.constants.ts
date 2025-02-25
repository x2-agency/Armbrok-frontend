import type { Metadata } from 'next';

export const INVESTMENT_BANKING_META: Metadata = {
	title: 'Investment Banking',
	openGraph: {
		title: 'Investment Banking',
		images: '/assets/ogs/investment-banking.png',
		type: 'website',
	},
	metadataBase: process.env.NEXT_PUBLIC_HOST_URL
		? new URL(`${process.env.NEXT_PUBLIC_HOST_URL}`)
		: undefined,
};
