import type { Metadata } from 'next';

import { getFundPage } from '@/shared/api/get-fund-page';
import { Fund } from '@/view/fund';

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const { slug } = await params;
	const initialFundPageData = await getFundPage({ slug });
	const seo = initialFundPageData?.data?.seo;

	if (!seo) {
		return {
			title: 'Fund',
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

const FundPage = async ({ params }: { params: { slug: string } }) => {
	const { slug } = await params;
	const initialData = await getFundPage({ slug });

	return <Fund {...initialData.data} />;
};

export default FundPage;
