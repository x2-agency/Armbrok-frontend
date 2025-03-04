import type { Metadata } from 'next';

import { getInvestmentBankingPage } from '@/shared/api/get-investment-banking';
import { getSecurityPapers } from '@/shared/api/security-papers';
import { REVALIDATE_VALUE } from '@/shared/config/revalidate';
import { InvestmentBanking } from '@/view/investment-banking';
import { INVESTMENT_BANKING_META } from '@/view/investment-banking/models/investment-banking.constants';

export const metadata: Metadata = INVESTMENT_BANKING_META;

export const revalidate = REVALIDATE_VALUE;

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
