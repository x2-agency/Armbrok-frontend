import type { Metadata } from 'next';

import { CareersAtArmbrock } from '@/view/careers-at-armbrock';

export const metadata: Metadata = {
	title: 'Careers at Armbrock',
};

const CareersAtArmbrockPage = () => {
	return <CareersAtArmbrock />;
};

export default CareersAtArmbrockPage;
