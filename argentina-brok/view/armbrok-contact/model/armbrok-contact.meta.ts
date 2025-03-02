import type { Metadata } from 'next';

export const ARMBROK_CONTACT_META: Metadata = {
	title: 'Armbrok Contact Page',
	metadataBase: process.env.NEXT_PUBLIC_HOST_URL
		? new URL(`${process.env.NEXT_PUBLIC_HOST_URL}`)
		: undefined,
};
