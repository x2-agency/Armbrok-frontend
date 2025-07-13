import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { getArmbrokSearchPage } from '@/shared/api/get-armbrok-search';
import { getParentFunds } from '@/shared/api/get-parent-funds';
import type { LocaleParams } from '@/shared/types/params';
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
		metadataBase: process.env.NEXT_PUBLIC_WEBSITE_URL
			? new URL(process.env.NEXT_PUBLIC_WEBSITE_URL)
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

const ArmbrokSearchPage = async ({ params }: LocaleParams) => {
	const { locale } = await params;
	setRequestLocale(locale);

	const [initialArmbrokSearchPageData, initialFunds] = await Promise.all([
		getArmbrokSearchPage(),
		getParentFunds(),
	]);

	return (
		<ArmbrokSearch
			{...initialArmbrokSearchPageData.data}
			parentFunds={initialFunds.data}
		/>
	);
};

export default ArmbrokSearchPage;
