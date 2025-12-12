import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { getInvestorRelations } from '@/shared/api/get-investor-relations';
import { generateTemplateMetadata } from '@/shared/helpers/generate-template-metadata';
import type { LocaleParams } from '@/shared/types/params';
import { InvestorRelations } from '@/view/investor-relations';

export async function generateMetadata(): Promise<Metadata> {
	const initialInvestorRelationsPageData = await getInvestorRelations();

	return generateTemplateMetadata({
		seo: initialInvestorRelationsPageData?.data?.seo,
	});
}

export const revalidate = 1;

const InvestorRelationsPage = async ({ params }: LocaleParams) => {
	const { locale } = await params;
	setRequestLocale(locale);

	const [initialInvestorRelationsPageData] = await Promise.all([
		getInvestorRelations(),
	]);

	return <InvestorRelations {...initialInvestorRelationsPageData?.data} />;
};

export default InvestorRelationsPage;
