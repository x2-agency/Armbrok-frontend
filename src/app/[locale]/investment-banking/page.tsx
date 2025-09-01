import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { getInvestmentBankingPage } from '@/shared/api/get-investment-banking';
import { getParentFunds } from '@/shared/api/get-parent-funds';
import { getSecurityPapers } from '@/shared/api/security-papers';
import type { LocaleParams } from '@/shared/types/params';
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

const InvestmentBankingPage = async ({ params }: LocaleParams) => {
	const { locale } = await params;
	setRequestLocale(locale);

	const [
		initialInvestmentBankingPageData,
		initialSecurityPapersData,
		initialFunds,
	] = await Promise.all([
		getInvestmentBankingPage(),
		getSecurityPapers(),
		getParentFunds(),
	]);

	return (
		<InvestmentBanking
			securityPapers={initialSecurityPapersData.data}
			{...initialInvestmentBankingPageData.data}
			parentFunds={initialFunds.data}
		/>
	);
};

export default InvestmentBankingPage;
