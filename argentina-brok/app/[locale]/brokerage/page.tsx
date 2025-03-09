import type { Metadata } from 'next';

import { getBrokeragePage } from '@/shared/api/get-brokerage';
import { Brokerage } from '@/view/brokerage';

export async function generateMetadata(): Promise<Metadata> {
	const initialBrokeragePageData = await getBrokeragePage();
	const seo = initialBrokeragePageData?.data?.seo;

	if (!seo) {
		return {
			title: 'Brokerage',
		};
	}

	return {
		metadataBase: process.env.WEBSITE_DOMAIN
			? new URL(process.env.WEBSITE_DOMAIN)
			: undefined,
		title: seo.metaTitle,
		description: seo.metaDescription,
		openGraph: {
			title: seo.metaTitle,
			description: seo.metaDescription,
			images: seo.shareImage ? [seo.shareImage.url] : [],
		},
	};
}

export const revalidate = 10;

const BrokeragePage = async () => {
	const initialBrokeragePageData = await getBrokeragePage();

	return <Brokerage initialData={initialBrokeragePageData || undefined} />;
};

export default BrokeragePage;
