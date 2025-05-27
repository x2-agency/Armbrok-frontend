import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { getDepositaryServicesPage } from '@/shared/api/get-depositary-services';
import { getParentFunds } from '@/shared/api/get-parent-funds';
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
		metadataBase: process.env.NEXT_PUBLIC_WEBSITE_DOMAIN
			? new URL(process.env.NEXT_PUBLIC_WEBSITE_DOMAIN)
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

const DepositaryServicesPage = async ({ params }: LocaleParams) => {
	const { locale } = await params;
	setRequestLocale(locale);

	const [initialDepositaryServicesPageData, initialFunds] = await Promise.all([
		getDepositaryServicesPage(),
		getParentFunds(),
	]);

	return (
		<DepositaryServices
			{...initialDepositaryServicesPageData.data}
			parentFunds={initialFunds.data}
		/>
	);
};

export default DepositaryServicesPage;
