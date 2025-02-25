import type { Metadata } from 'next';

export const DEPOSITARY_SERVICES_META: Metadata = {
	title: 'Depositary Services',
	openGraph: {
		title: 'Depositary Services',
		images: '/assets/ogs/depositary-services.png',
		type: 'website',
	},
	metadataBase: process.env.NEXT_PUBLIC_HOST_URL
		? new URL(`${process.env.NEXT_PUBLIC_HOST_URL}`)
		: undefined,
};
