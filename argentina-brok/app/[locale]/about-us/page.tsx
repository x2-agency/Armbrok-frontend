import type { Metadata } from 'next';

import { getAboutUsPage } from '@/shared/api/get-about-us';
import { getAwards } from '@/shared/api/get-awards';
import { getParentFunds } from '@/shared/api/get-parent-funds';
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
	const [initialAboutUsPageData, initialAwards, initialFunds] =
		await Promise.all([
			getAboutUsPage(),
			getAwards({ pageSize: 7 }),
			getParentFunds(),
		]);

	return (
		<AboutUs
			{...initialAboutUsPageData?.data}
			awards={initialAwards}
			parentFunds={initialFunds.data}
		/>
	);
};

export default AboutUsPage;
