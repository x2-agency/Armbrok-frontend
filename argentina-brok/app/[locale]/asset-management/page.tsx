import type { Metadata } from 'next';

import { getAssetManagementPage } from '@/shared/api/get-asset-management';
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

const AssetManagementPage = async () => {
	try {
		const inititalAssetManagementPageData = await getAssetManagementPage();

		return <AssetManagement initialData={inititalAssetManagementPageData} />;
	} catch {
		return <AssetManagement />;
	}
};

export default AssetManagementPage;
