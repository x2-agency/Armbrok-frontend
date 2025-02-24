import type { Metadata } from 'next';

export const ABOUT_US_META: Metadata = {
	title: 'About us',
	openGraph: {
		title: 'About us',
		images: '/assets/ogs/about-us.png',
		type: 'website',
	},
	metadataBase: process.env.NEXT_PUBLIC_HOST_URL
		? new URL(`${process.env.NEXT_PUBLIC_HOST_URL}`)
		: undefined,
};
