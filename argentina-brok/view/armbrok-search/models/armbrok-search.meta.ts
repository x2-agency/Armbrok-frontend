import type { Metadata } from 'next';

export const ARMBROK_SEARCH_META: Metadata = {
	title: 'Armbrok Search',
	metadataBase: process.env.NEXT_PUBLIC_HOST_URL
		? new URL(`${process.env.NEXT_PUBLIC_HOST_URL}`)
		: undefined,
};
