import type { Metadata } from 'next';

import { InvestmentBanking } from '@/view/investment-banking';

export const metadata: Metadata = {
	title: 'Investment Banking',
};

const InvestmentBankingPage = () => {
	return <InvestmentBanking />;
};

export default InvestmentBankingPage;
