import type { Metadata } from 'next';

import { getRegulation } from '@/shared/api/get-regulation';
import { Regulation } from '@/view/regulation';

export async function generateMetadata(): Promise<Metadata> {
	const initialRegulationPageData = await getRegulation();
	const seo = initialRegulationPageData?.data?.seo;

	if (!seo) {
		return {
			title: 'Regulation',
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

const RegulationPage = async () => {
	const [initialRegulation] = await Promise.all([getRegulation()]);

	return <Regulation {...initialRegulation.data} />;
};

export default RegulationPage;
