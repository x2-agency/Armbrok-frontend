import type { Metadata } from 'next';

import { getInvestmentBankingPage } from '@/shared/api/get-investment-banking';
import { InvestmentBanking } from '@/view/investment-banking';

export const metadata: Metadata = {
	title: 'Investment Banking',
};

const InvestmentBankingPage = async () => {
	const initialInvestmentBankingPageData = await getInvestmentBankingPage();

	return <InvestmentBanking initialData={initialInvestmentBankingPageData} />;
};

export default InvestmentBankingPage;
