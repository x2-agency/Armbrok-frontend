import type { Metadata } from 'next';

export const MEDIA_META: Metadata = {
	title: 'Media',
	openGraph: {
		title: 'Media',
		images: '/assets/ogs/about-us.png',
		type: 'website',
	},
	metadataBase: process.env.NEXT_PUBLIC_HOST_URL
		? new URL(`${process.env.NEXT_PUBLIC_HOST_URL}`)
		: undefined,
};
