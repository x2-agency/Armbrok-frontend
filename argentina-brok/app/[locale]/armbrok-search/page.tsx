import type { Metadata } from 'next';

import { getArmbrokSearchPage } from '@/shared/api/get-armbrok-search';
import { ArmbrokSearch } from '@/view/armbrok-search';

export async function generateMetadata(): Promise<Metadata> {
	const initialArmbrokSearchPageData = await getArmbrokSearchPage();
	const seo = initialArmbrokSearchPageData?.data?.seo;

	if (!seo) {
		return {
			title: 'Armbrok Search',
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

const ArmbrokSearchPage = async () => {
	const initialArmbrokSearchPageData = await getArmbrokSearchPage();

	return <ArmbrokSearch {...initialArmbrokSearchPageData.data} />;
};

export default ArmbrokSearchPage;
