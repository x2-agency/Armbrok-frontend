import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { getCareersAtArmbrokPage } from '@/shared/api/get-careers-at-armbrock';
import { getParentFunds } from '@/shared/api/get-parent-funds';
import { getVacancies } from '@/shared/api/get-vacancies';
import type { LocaleParams } from '@/shared/types/params';
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
		metadataBase: process.env.NEXT_PUBLIC_WEBSITE_URL
			? new URL(process.env.NEXT_PUBLIC_WEBSITE_URL)
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

export const revalidate = 1;

const CareersAtArmbrokPage = async ({ params }: LocaleParams) => {
	const { locale } = await params;
	setRequestLocale(locale);

	const [initialCareersAtArmbrokPageData, initialVacanciesData, initialFunds] =
		await Promise.all([
			getCareersAtArmbrokPage(),
			getVacancies(),
			getParentFunds(),
		]);

	return (
		<CareersAtArmbrok
			{...initialCareersAtArmbrokPageData.data}
			vacancies={initialVacanciesData}
			parentFunds={initialFunds.data}
		/>
	);
};

export default CareersAtArmbrokPage;
