import { getArmbrokSearchPage } from '@/shared/api/get-armbrok-search';
import { ArmbrokSearch } from '@/view/armbrok-search';

const ArmbrokSearchPage = async () => {
	const initialArmbrokSearchPageData = await getArmbrokSearchPage();

	return <ArmbrokSearch {...initialArmbrokSearchPageData.data} />;
};

export default ArmbrokSearchPage;
