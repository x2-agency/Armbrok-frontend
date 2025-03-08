import type { Metadata } from 'next';

import { getDepositaryServicesPage } from '@/shared/api/get-depositary-services';
import { DepositaryServices } from '@/view/depositary-services';

export async function generateMetadata(): Promise<Metadata> {
	const initialDepositaryServicesPageData = await getDepositaryServicesPage();
	const seo = initialDepositaryServicesPageData?.data?.seo;

	if (!seo) {
		return {
			title: 'Depositary Services',
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

const DepositaryServicesPage = async () => {
	const initialDepositaryServicesPageData = await getDepositaryServicesPage();

	return <DepositaryServices {...initialDepositaryServicesPageData.data} />;
};

export default DepositaryServicesPage;
