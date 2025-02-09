import type { Metadata } from 'next';

import { AssetManagement } from '@/view/asset-management';

export const metadata: Metadata = {
	title: 'Asset Management',
};

const AssetManagementPage = () => {
	return <AssetManagement />;
};

export default AssetManagementPage;
