import type { Metadata } from 'next';

import { getInvestorRelations } from '@/shared/api/get-investor-relations';
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

const InvestorRelationsPage = async () => {
	const initialInvestorRelationsPageData = await getInvestorRelations();

	return <InvestorRelations {...initialInvestorRelationsPageData?.data} />;
};

export default InvestorRelationsPage;
