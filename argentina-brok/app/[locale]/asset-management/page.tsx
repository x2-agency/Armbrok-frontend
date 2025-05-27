import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { getAssetManagementPage } from '@/shared/api/get-asset-management';
import { getParentFunds } from '@/shared/api/get-parent-funds';
import type { LocaleParams } from '@/shared/types/params';
import { AssetManagement } from '@/view/asset-management';

export async function generateMetadata(): Promise<Metadata> {
	const initialAssetManagementPageData = await getAssetManagementPage();
	const seo = initialAssetManagementPageData?.data?.seo;

	if (!seo) {
		return {
			title: 'Asset Management',
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

const AssetManagementPage = async ({ params }: LocaleParams) => {
	const { locale } = await params;
	setRequestLocale(locale);

	try {
		const [initialAssetManagementPageData, initialFunds] = await Promise.all([
			getAssetManagementPage(),
			getParentFunds(),
		]);

		initialAssetManagementPageData.data.parentFunds = initialFunds.data;

		return <AssetManagement initialData={initialAssetManagementPageData} />;
	} catch {
		return <AssetManagement />;
	}
};

export default AssetManagementPage;
