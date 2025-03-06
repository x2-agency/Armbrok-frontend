import type { Metadata } from 'next';

import { getCareersAtArmbrokPage } from '@/shared/api/get-careers-at-armbrock';
import { getVacancies } from '@/shared/api/get-vacancies';
import { CareersAtArmbrok } from '@/view/careers-at-armbrok';
import { CAREERS_AT_ARMBROK_META } from '@/view/careers-at-armbrok/models/careers-at-armbrok.constants';

export const metadata: Metadata = CAREERS_AT_ARMBROK_META;

export const revalidate = 10;

const CareersAtArmbrokPage = async () => {
	const initialCareersAtArmbrokPageData = await getCareersAtArmbrokPage();
	const initalVacanciesData = await getVacancies();

	return (
		<CareersAtArmbrok
			{...initialCareersAtArmbrokPageData.data}
			vacancies={initalVacanciesData}
		/>
	);
};

export default CareersAtArmbrokPage;
