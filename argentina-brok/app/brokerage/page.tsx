import type { Metadata } from 'next';

import { Brokerage } from '@/view/brokerage';

export const metadata: Metadata = {
	title: 'Brokerage',
};

const BrokeragePage = () => {
	return <Brokerage />;
};

export default BrokeragePage;
