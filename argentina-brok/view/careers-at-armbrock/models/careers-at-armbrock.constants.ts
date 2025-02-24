import type { Metadata } from 'next';

export const FEEDBACK_FORM = {
	title:
		'Want to&nbsp;keep up&nbsp;to&nbsp;date with the latest<br /> and most relevant jobs?',
	description:
		'Subscribe to&nbsp;our newsletter and receive job picks<br /> directly to&nbsp;your inbox. Don&rsquo;t miss your chance!',
};

export const CAREERS_AT_ARMBROK_META: Metadata = {
	title: 'Careers at Armbrok',
	openGraph: {
		title: 'Careers at Armbrok',
		images: '/assets/ogs/careers-at-armbrok.png',
		type: 'website',
	},
	metadataBase: process.env.NEXT_PUBLIC_HOST_URL
		? new URL(`${process.env.NEXT_PUBLIC_HOST_URL}`)
		: undefined,
};
