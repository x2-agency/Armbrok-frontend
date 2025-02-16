import type { Metadata } from 'next';

import { getCareersAtArmbrockPage } from '@/shared/api/get-careers-at-armbrock';
import { CareersAtArmbrock } from '@/view/careers-at-armbrock';

export const metadata: Metadata = {
	title: 'Careers at Armbrock',
};

const CareersAtArmbrockPage = async () => {
	const initialCareersAtArmbrockPageData = await getCareersAtArmbrockPage();

	return <CareersAtArmbrock initialData={initialCareersAtArmbrockPageData} />;
};

export default CareersAtArmbrockPage;
