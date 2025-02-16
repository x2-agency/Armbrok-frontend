import { getInvestorRelations } from '@/shared/api/get-investor-relations';
import { InvestorRelations } from '@/view/investor-relations';

const InvestorRelationsPage = async () => {
	const initialInvestorRelationsPageData = await getInvestorRelations();

	return <InvestorRelations initialData={initialInvestorRelationsPageData} />;
};

export default InvestorRelationsPage;
