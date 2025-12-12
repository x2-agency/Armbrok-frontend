import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { getFundsPage } from '@/shared/api/get-funds';
import { getParentFunds } from '@/shared/api/get-parent-funds';
import { generateTemplateMetadata } from '@/shared/helpers/generate-template-metadata';
import type { LocaleParams } from '@/shared/types/params';
import { Funds } from '@/view/funds';

export async function generateMetadata(): Promise<Metadata> {
	const initialFundsPageData = await getFundsPage();

	return generateTemplateMetadata({
		seo: initialFundsPageData?.data?.seo,
	});
}

export const revalidate = 1;

const FundsPage = async ({ params }: LocaleParams) => {
	const { locale } = await params;
	setRequestLocale(locale);

	const [initialFundsPageData, parentFunds] = await Promise.all([
		getFundsPage(),
		getParentFunds(),
	]);

	initialFundsPageData.data.parentFunds = parentFunds.data;

	return <Funds initialFundsPageData={initialFundsPageData} />;
};

export default FundsPage;
