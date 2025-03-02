import type { Metadata } from 'next';

import { getFundsPage } from '@/shared/api/get-funds';
import { Funds } from '@/view/funds';
import { FUNDS_META } from '@/view/funds/model/meta.constants';

export const metadata: Metadata = FUNDS_META;

const FundsPage = async () => {
	const initialFundsPageData = await getFundsPage();

	return <Funds initialFundsPageData={initialFundsPageData} />;
};

export default FundsPage;
