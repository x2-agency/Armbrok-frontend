import type { Metadata } from 'next';

export const REGULATION_META: Metadata = {
	title: 'Regulation',
	metadataBase: process.env.NEXT_PUBLIC_HOST_URL
		? new URL(`${process.env.NEXT_PUBLIC_HOST_URL}`)
		: undefined,
};
