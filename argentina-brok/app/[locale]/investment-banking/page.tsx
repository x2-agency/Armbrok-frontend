import type { Metadata } from 'next';

import { getInvestmentBankingPage } from '@/shared/api/get-investment-banking';
import { getSecurityPapers } from '@/shared/api/security-papers';
import { InvestmentBanking } from '@/view/investment-banking';

export async function generateMetadata(): Promise<Metadata> {
	const initialInvestmentBankingPageData = await getInvestmentBankingPage();
	const seo = initialInvestmentBankingPageData?.data?.seo;

	if (!seo) {
		return {
			title: 'Investment Banking',
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

const InvestmentBankingPage = async () => {
	const initialInvestmentBankingPageData = await getInvestmentBankingPage();
	const initialSecurityPapersData = await getSecurityPapers();

	return (
		<InvestmentBanking
			securityPapers={initialSecurityPapersData.data}
			{...initialInvestmentBankingPageData.data}
		/>
	);
};

export default InvestmentBankingPage;
