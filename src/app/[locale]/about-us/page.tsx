import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { getAboutUsPage } from '@/shared/api/get-about-us';
import { getAwards } from '@/shared/api/get-awards';
import type { LocaleParams } from '@/shared/types/params';
import { AboutUs } from '@/view/about-us';

export async function generateMetadata(): Promise<Metadata> {
	const initialAboutUsPageData = await getAboutUsPage();
	const seo = initialAboutUsPageData?.data?.seo;

	if (!seo) {
		return {
			title: 'About us',
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

const AboutUsPage = async ({ params }: LocaleParams) => {
	const { locale } = await params;
	setRequestLocale(locale);

	const [initialAboutUsPageData, initialAwards] = await Promise.all([
		getAboutUsPage(),
		getAwards({ pageSize: 7 }),
	]);

	return <AboutUs {...initialAboutUsPageData?.data} awards={initialAwards} />;
};

export default AboutUsPage;
