import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { getCareersAtArmbrokPage } from '@/shared/api/get-careers-at-armbrock';
import { getVacancies } from '@/shared/api/get-vacancies';
import { generateTemplateMetadata } from '@/shared/helpers/generate-template-metadata';
import type { LocaleParams } from '@/shared/types/params';
import { CareersAtArmbrok } from '@/view/careers-at-armbrok';

export async function generateMetadata(): Promise<Metadata> {
	const initialCareersAtArmbrokPageData = await getCareersAtArmbrokPage();

	return generateTemplateMetadata({
		seo: initialCareersAtArmbrokPageData?.data?.seo,
	});
}

export const revalidate = 1;

const CareersAtArmbrokPage = async ({ params }: LocaleParams) => {
	const { locale } = await params;
	setRequestLocale(locale);

	const [initialCareersAtArmbrokPageData, initialVacanciesData] =
		await Promise.all([getCareersAtArmbrokPage(), getVacancies()]);

	return (
		<CareersAtArmbrok
			{...initialCareersAtArmbrokPageData.data}
			vacancies={initialVacanciesData}
		/>
	);
};

export default CareersAtArmbrokPage;
