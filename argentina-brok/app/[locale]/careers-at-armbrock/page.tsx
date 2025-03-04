import type { Metadata } from 'next';

import { getCareersAtArmbrockPage } from '@/shared/api/get-careers-at-armbrock';
import { getVacancies } from '@/shared/api/get-vacancies';
import { REVALIDATE_VALUE } from '@/shared/config/revalidate';
import { CareersAtArmbrock } from '@/view/careers-at-armbrock';
import { CAREERS_AT_ARMBROK_META } from '@/view/careers-at-armbrock/models/careers-at-armbrock.constants';

export const metadata: Metadata = CAREERS_AT_ARMBROK_META;

export const revalidate = REVALIDATE_VALUE;

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
