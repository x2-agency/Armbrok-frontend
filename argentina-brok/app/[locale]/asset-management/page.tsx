import type { Metadata } from 'next';

import { getAssetManagementPage } from '@/shared/api/get-asset-management';
import { REVALIDATE_VALUE } from '@/shared/config/revalidate';
import { AssetManagement } from '@/view/asset-management';

export const metadata: Metadata = {
	title: 'Asset Management',
};

export const revalidate = REVALIDATE_VALUE;

const AssetManagementPage = async () => {
	try {
		const inititalAssetManagementPageData = await getAssetManagementPage();

		return <AssetManagement initialData={inititalAssetManagementPageData} />;
	} catch {
		return <AssetManagement />;
	}
};

export default AssetManagementPage;
