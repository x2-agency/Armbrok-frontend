import type { Metadata } from 'next';

import { getDepositaryServicesPage } from '@/shared/api/get-depositary-services';
import { DepositaryServices } from '@/view/depositary-services';

export const metadata: Metadata = {
	title: 'Depositary Services',
};

const DepositaryServicesPage = async () => {
	const initialDepositaryServicesPageData = await getDepositaryServicesPage();

	return <DepositaryServices {...initialDepositaryServicesPageData.data} />;
};

export default DepositaryServicesPage;
