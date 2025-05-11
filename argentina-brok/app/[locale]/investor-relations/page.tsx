import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { getInvestorRelations } from '@/shared/api/get-investor-relations';
import { getParentFunds } from '@/shared/api/get-parent-funds';
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

const InvestorRelationsPage = async ({ params }: LocaleParams) => {
	const { locale } = await params;
	setRequestLocale(locale);

	const [initialInvestorRelationsPageData, initialFunds] = await Promise.all([
		getInvestorRelations(),
		getParentFunds(),
	]);

	return (
		<InvestorRelations
			{...initialInvestorRelationsPageData?.data}
			parentFunds={initialFunds.data}
		/>
	);
};

export default InvestorRelationsPage;
