import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { getBrokeragePage } from '@/shared/api/get-brokerage';
import { generateTemplateMetadata } from '@/shared/helpers/generate-template-metadata';
import type { LocaleParams } from '@/shared/types/params';
import { Brokerage } from '@/view/brokerage';

export async function generateMetadata(): Promise<Metadata> {
	const initialBrokeragePageData = await getBrokeragePage();

	return generateTemplateMetadata({
		seo: initialBrokeragePageData?.data?.seo,
	});
}

export const revalidate = 1;

const BrokeragePage = async ({ params }: LocaleParams) => {
	const { locale } = await params;
	setRequestLocale(locale);

	const [initialBrokeragePageData] = await Promise.all([getBrokeragePage()]);

	return <Brokerage initialData={initialBrokeragePageData || undefined} />;
};

export default BrokeragePage;
