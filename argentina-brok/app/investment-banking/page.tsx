import type { Metadata } from 'next';

import { getInvestmentBankingPage } from '@/shared/api/get-investment-banking';
import { getSecurityPapers } from '@/shared/api/security-papers';
import { InvestmentBanking } from '@/view/investment-banking';

export const metadata: Metadata = {
	title: 'Investment Banking',
};

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
