import type { Metadata } from 'next';

import { getDepositaryServicesPage } from '@/shared/api/get-depositary-services';
import { DepositaryServices } from '@/view/depositary-services';
import { DEPOSITARY_SERVICES_META } from '@/view/depositary-services/model';

export const metadata: Metadata = DEPOSITARY_SERVICES_META;

export const revalidate = 10;

const DepositaryServicesPage = async () => {
	const initialDepositaryServicesPageData = await getDepositaryServicesPage();

	return <DepositaryServices {...initialDepositaryServicesPageData.data} />;
};

export default DepositaryServicesPage;
