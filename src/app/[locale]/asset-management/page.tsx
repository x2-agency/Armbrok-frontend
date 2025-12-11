import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { getAssetManagementPage } from '@/shared/api/get-asset-management';
import { generateTemplateMetadata } from '@/shared/helpers/generate-template-metadata';
import type { LocaleParams } from '@/shared/types/params';
import { AssetManagement } from '@/view/asset-management';

export async function generateMetadata(): Promise<Metadata> {
	const initialAssetManagementPageData = await getAssetManagementPage();

	return generateTemplateMetadata({
		seo: initialAssetManagementPageData?.data?.seo,
	});
}

export const revalidate = 1;

const AssetManagementPage = async ({ params }: LocaleParams) => {
	const { locale } = await params;
	setRequestLocale(locale);

	try {
		const [initialAssetManagementPageData] = await Promise.all([
			getAssetManagementPage(),
		]);

		return <AssetManagement initialData={initialAssetManagementPageData} />;
	} catch {
		return <AssetManagement />;
	}
};

export default AssetManagementPage;
