import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { getInvestmentBankingPage } from '@/shared/api/get-investment-banking';
import { getSecurityPapers } from '@/shared/api/security-papers';
import { generateTemplateMetadata } from '@/shared/helpers/generate-template-metadata';
import type { LocaleParams } from '@/shared/types/params';
import { InvestmentBanking } from '@/view/investment-banking';

export async function generateMetadata(): Promise<Metadata> {
	const initialInvestmentBankingPageData = await getInvestmentBankingPage();
	
	return generateTemplateMetadata({
		seo: initialInvestmentBankingPageData?.data?.seo,
	});
}

export const revalidate = 1;

const InvestmentBankingPage = async ({ params }: LocaleParams) => {
	const { locale } = await params;
	setRequestLocale(locale);

	const [initialInvestmentBankingPageData, initialSecurityPapersData] =
		await Promise.all([getInvestmentBankingPage(), getSecurityPapers()]);

	return (
		<InvestmentBanking
			securityPapers={initialSecurityPapersData.data}
			{...initialInvestmentBankingPageData.data}
		/>
	);
};

export default InvestmentBankingPage;
