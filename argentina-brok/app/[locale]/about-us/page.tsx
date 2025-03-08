import type { Metadata } from 'next';

import { getAboutUsPage } from '@/shared/api/get-about-us';
import { getAwards } from '@/shared/api/get-awards';
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

const AboutUsPage = async () => {
	const initialAboutUsPageData = await getAboutUsPage();
	const initialAwards = await getAwards({ pageSize: 7 });

	return <AboutUs {...initialAboutUsPageData?.data} awards={initialAwards} />;
};

export default AboutUsPage;
