import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { getInvestorRelations } from '@/shared/api/get-investor-relations';
import type { LocaleParams } from '@/shared/types/params';
import { InvestorRelations } from '@/view/investor-relations';

export async function generateMetadata(): Promise<Metadata> {
	const initialInvestorRelationsPageData = await getInvestorRelations();
	const seo = initialInvestorRelationsPageData?.data?.seo;

	if (!seo) {
		return {
			title: 'Investor Relations',
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

export const revalidate = 1;

const InvestorRelationsPage = async ({ params }: LocaleParams) => {
	const { locale } = await params;
	setRequestLocale(locale);

	const [initialInvestorRelationsPageData] = await Promise.all([
		getInvestorRelations(),
	]);

	return <InvestorRelations {...initialInvestorRelationsPageData?.data} />;
};

export default InvestorRelationsPage;
