import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { getAwards } from '@/shared/api/get-awards';
import { getHomePage } from '@/shared/api/get-homepage';
import { getParentFunds } from '@/shared/api/get-parent-funds';
import { generateTemplateMetadata } from '@/shared/helpers/generate-template-metadata';
import type { LocaleParams } from '@/shared/types/params';
import { Home } from '@/view/home';

export async function generateMetadata(): Promise<Metadata> {
	const initialHomePageData = await getHomePage();
	
	return generateTemplateMetadata({ seo: initialHomePageData?.data?.seo });
}

export const revalidate = 1;

const IndexPage = async ({ params }: LocaleParams) => {
	const { locale } = await params;
	setRequestLocale(locale);

	const [homePageResult, awardsResult, fundsResult] = await Promise.allSettled([
		getHomePage(),
		getAwards({}),
		getParentFunds(),
	]);

	const initialHomePageData =
		homePageResult.status === 'fulfilled' ? homePageResult.value : null;
	const initialAwards =
		awardsResult.status === 'fulfilled' ? awardsResult.value : null;
	const initialFunds =
		fundsResult.status === 'fulfilled' ? fundsResult.value : { data: [] };

	return (
		<Home
			initialData={initialHomePageData}
			initialAwards={initialAwards}
			parentFunds={initialFunds.data}
		/>
	);
};

export default IndexPage;
