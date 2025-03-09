import type { Metadata } from 'next';

import { getCareersAtArmbrokPage } from '@/shared/api/get-careers-at-armbrock';
import { getVacancies } from '@/shared/api/get-vacancies';
import { CareersAtArmbrok } from '@/view/careers-at-armbrok';

export async function generateMetadata(): Promise<Metadata> {
	const initialCareersAtArmbrokPageData = await getCareersAtArmbrokPage();
	const seo = initialCareersAtArmbrokPageData?.data?.seo;

	if (!seo) {
		return {
			title: 'Careers at Armbrok',
		};
	}

	return {
		metadataBase: process.env.WEBSITE_DOMAIN
			? new URL(process.env.WEBSITE_DOMAIN)
			: undefined,
		title: seo.metaTitle,
		description: seo.metaDescription,
		openGraph: {
			title: seo.metaTitle,
			description: seo.metaDescription,
			images: seo.shareImage ? [seo.shareImage.url] : [],
		},
	};
}

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
