import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { getFundsPage } from '@/shared/api/get-funds';
import { getParentFunds } from '@/shared/api/get-parent-funds';
import type { LocaleParams } from '@/shared/types/params';
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

const FundsPage = async ({ params }: LocaleParams) => {
	const { locale } = await params;
	setRequestLocale(locale);

	const [initialFundsPageData, parentFunds] = await Promise.all([
		getFundsPage(),
		getParentFunds(),
	]);

	initialFundsPageData.data.parentFunds = parentFunds.data;

	return <Funds initialFundsPageData={initialFundsPageData} />;
};

export default FundsPage;
