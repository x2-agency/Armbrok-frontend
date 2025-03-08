import type { Metadata } from 'next';

import { getFundsPage } from '@/shared/api/get-funds';
import { Funds } from '@/view/funds';

export async function generateMetadata(): Promise<Metadata> {
	const initialFundsPageData = await getFundsPage();
	const seo = initialFundsPageData?.data?.seo;

	if (!seo) {
		return {
			title: 'Funds',
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

const FundsPage = async () => {
	const initialFundsPageData = await getFundsPage();

	return <Funds initialFundsPageData={initialFundsPageData} />;
};

export default FundsPage;
