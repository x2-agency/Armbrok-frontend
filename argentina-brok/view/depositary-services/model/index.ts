import type { Metadata } from 'next';

export const DEPOSITARY_SERVICES_META: Metadata = {
	title: 'Depositary Services',
	openGraph: {
		title: 'Depositary Services',
		images: '/assets/ogs/depositary-services.png',
		type: 'website',
	},
	metadataBase: process.env.WEBSITE_DOMAIN
		? new URL(`${process.env.WEBSITE_DOMAIN}`)
		: undefined,
};
