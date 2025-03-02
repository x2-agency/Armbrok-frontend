import type { Metadata } from 'next';

import { getArmbrokSearchPage } from '@/shared/api/get-armbrok-search';
import { ArmbrokSearch } from '@/view/armbrok-search';
import { ARMBROK_SEARCH_META } from '@/view/armbrok-search/models/armbrok-search.meta';

export const metadata: Metadata = ARMBROK_SEARCH_META;

const ArmbrokSearchPage = async () => {
	const initialArmbrokSearchPageData = await getArmbrokSearchPage();

	return <ArmbrokSearch {...initialArmbrokSearchPageData.data} />;
};

export default ArmbrokSearchPage;
