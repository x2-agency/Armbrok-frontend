import type { Metadata } from 'next';

import { getInvestorRelations } from '@/shared/api/get-investor-relations';
import { InvestorRelations } from '@/view/investor-relations';
import { INVESTOR_RELATIONS_META } from '@/view/investor-relations/models/investor-relations.constants';

export const metadata: Metadata = INVESTOR_RELATIONS_META;

const InvestorRelationsPage = async () => {
	const initialInvestorRelationsPageData = await getInvestorRelations();

	return <InvestorRelations {...initialInvestorRelationsPageData?.data} />;
};

export default InvestorRelationsPage;
