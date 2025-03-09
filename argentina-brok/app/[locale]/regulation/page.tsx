import type { Metadata } from 'next';

import { getRegulation } from '@/shared/api/get-regulation';
import { Regulation } from '@/view/regulation';
import type { RegulationPageResponse } from '@/view/regulation/types/response';

export async function generateMetadata(): Promise<Metadata> {
	const initialRegulationPageData = await getRegulation();
	const seo = initialRegulationPageData?.data?.seo;

	if (!seo) {
		return {
			title: 'Regulation',
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

const RegulationPage = async () => {
	const initialRegulation: RegulationPageResponse = await getRegulation();

	return <Regulation {...initialRegulation.data} />;
};

export default RegulationPage;
