import type { Metadata } from 'next';

import { getAwards } from '@/shared/api/get-awards';
import { getHomePage } from '@/shared/api/get-homepage';
import { getParentFunds } from '@/shared/api/get-parent-funds';
import { Home } from '@/view/home';

export async function generateMetadata(): Promise<Metadata> {
	const initialHomePageData = await getHomePage();
	const seo = initialHomePageData?.data?.seo;

	if (!seo) {
		return {
			title: 'Home',
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

const IndexPage = async () => {
	const [homePageResult, awardsResult, fundsResult] = await Promise.allSettled([
		getHomePage(),
		getAwards({ pageSize: 4 }),
		getParentFunds(),
	]);

	const initialHomePageData =
		homePageResult.status === 'fulfilled' ? homePageResult.value : null;
	const initialAwards =
		awardsResult.status === 'fulfilled' ? awardsResult.value : null;
	const initialFunds =
		fundsResult.status === 'fulfilled' ? fundsResult.value : { data: [] };

	return (
		<Home
			initialData={initialHomePageData}
			initialAwards={initialAwards}
			parentFunds={initialFunds.data}
		/>
	);
};

export default IndexPage;
