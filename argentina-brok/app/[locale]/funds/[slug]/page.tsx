import { getFundPage } from '@/shared/api/get-fund-page';
import { Fund } from '@/view/fund';

const FundPage = async ({ params }: { params: { slug: string } }) => {
	const { slug } = await params;
	const initialData = await getFundPage({ slug });

	return <Fund {...initialData.data} />;
};

export default FundPage;
