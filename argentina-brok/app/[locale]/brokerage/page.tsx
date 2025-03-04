import type { Metadata } from 'next';

import { getBrokeragePage } from '@/shared/api/get-brokerage';
import { REVALIDATE_VALUE } from '@/shared/config/revalidate';
import { Brokerage } from '@/view/brokerage';
export const metadata: Metadata = {
	title: 'Brokerage',
};

export const revalidate = REVALIDATE_VALUE;

const BrokeragePage = async () => {
	const initialBrokeragePageData = await getBrokeragePage();

	return <Brokerage initialData={initialBrokeragePageData || undefined} />;
};

export default BrokeragePage;
