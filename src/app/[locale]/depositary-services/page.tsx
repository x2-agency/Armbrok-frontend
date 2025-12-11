import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { getDepositaryServicesPage } from '@/shared/api/get-depositary-services';
import type { LocaleParams } from '@/shared/types/params';
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

const DepositaryServicesPage = async ({ params }: LocaleParams) => {
	const { locale } = await params;
	setRequestLocale(locale);

	const [initialDepositaryServicesPageData] = await Promise.all([
		getDepositaryServicesPage(),
	]);

	return <DepositaryServices {...initialDepositaryServicesPageData.data} />;
};

export default DepositaryServicesPage;
