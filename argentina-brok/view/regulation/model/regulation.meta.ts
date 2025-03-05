import type { Metadata } from 'next';

export const REGULATION_META: Metadata = {
	title: 'Regulations',
	metadataBase: process.env.NEXT_PUBLIC_HOST_URL
		? new URL(`${process.env.NEXT_PUBLIC_HOST_URL}`)
		: undefined,
};
