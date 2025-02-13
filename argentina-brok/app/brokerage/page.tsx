import type { Metadata } from 'next';

import { getBrokeragePage } from '@/shared/api/get-brokerage';
import { Brokerage } from '@/view/brokerage';
export const metadata: Metadata = {
	title: 'Brokerage',
};

const BrokeragePage = async () => {
	const initialBrokeragePageData = await getBrokeragePage();

	return <Brokerage initialData={initialBrokeragePageData || undefined} />;
};

export default BrokeragePage;
