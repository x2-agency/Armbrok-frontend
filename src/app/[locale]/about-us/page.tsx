import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { getAboutUsPage } from '@/shared/api/get-about-us';
import { getAwards } from '@/shared/api/get-awards';
import { generateTemplateMetadata } from '@/shared/helpers/generate-template-metadata';
import type { LocaleParams } from '@/shared/types/params';
import { AboutUs } from '@/view/about-us';

export async function generateMetadata(): Promise<Metadata> {
	const initialAboutUsPageData = await getAboutUsPage();

	return generateTemplateMetadata({
		seo: initialAboutUsPageData?.data?.seo,
	});
}

export const revalidate = 1;

const AboutUsPage = async ({ params }: LocaleParams) => {
	const { locale } = await params;
	setRequestLocale(locale);

	const [initialAboutUsPageData, initialAwards] = await Promise.all([
		getAboutUsPage(),
		getAwards({}),
	]);

	return <AboutUs {...initialAboutUsPageData?.data} awards={initialAwards} />;
};

export default AboutUsPage;
