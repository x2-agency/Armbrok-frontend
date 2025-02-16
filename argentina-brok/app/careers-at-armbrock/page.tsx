import type { Metadata } from 'next';

import { getCareersAtArmbrockPage } from '@/shared/api/get-careers-at-armbrock';
import { getVacancies } from '@/shared/api/get-vacancies';
import { CareersAtArmbrock } from '@/view/careers-at-armbrock';

export const metadata: Metadata = {
	title: 'Careers at Armbrock',
};

const CareersAtArmbrockPage = async () => {
	const initialCareersAtArmbrockPageData = await getCareersAtArmbrockPage();
	const initalVacanciesData = await getVacancies();

	return (
		<CareersAtArmbrock
			{...initialCareersAtArmbrockPageData.data}
			vacancies={initalVacanciesData}
		/>
	);
};

export default CareersAtArmbrockPage;
