import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { getDepositaryServicesPage } from '@/shared/api/get-depositary-services';
import { generateTemplateMetadata } from '@/shared/helpers/generate-template-metadata';
import type { LocaleParams } from '@/shared/types/params';
import { DepositaryServices } from '@/view/depositary-services';

export async function generateMetadata(): Promise<Metadata> {
	const initialDepositaryServicesPageData = await getDepositaryServicesPage();

	return generateTemplateMetadata({
		seo: initialDepositaryServicesPageData?.data?.seo,
	});
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
