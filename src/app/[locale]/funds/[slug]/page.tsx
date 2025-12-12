import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { Locales } from '@/i18n/routing';
import { getFundPage } from '@/shared/api/get-fund-page';
import { getFundPerformanceEntity } from '@/shared/api/get-graphic';
import { getIsrParentFunds } from '@/shared/api/get-isr-parent-funds';
import { generateTemplateMetadata } from '@/shared/helpers/generate-template-metadata';
import type { ParentFundProps } from '@/shared/types/global.types';
import type { LocaleParams, SlugParams } from '@/shared/types/params';
import { Fund } from '@/view/fund';

export async function generateMetadata({
	params,
}: SlugParams): Promise<Metadata> {
	const { slug } = await params;
	const initialFundPageData = await getFundPage({ slug });

	return generateTemplateMetadata({ seo: initialFundPageData?.data?.seo });
}

export const revalidate = 1;

export const generateStaticParams = async () => {
	const response: { data: Array<ParentFundProps> } = await getIsrParentFunds();

	return Object.values(Locales).flatMap(locale =>
		response.data.map(fund => ({
			slug: fund.slug,
			locale,
		}))
	);
};

const FundPage = async ({ params }: SlugParams & LocaleParams) => {
	const { slug, locale } = await params;
	setRequestLocale(locale);
	const [
		initialData,
		initialGraphicData,
		initialHeatMapData,
		initialProfitTableData,
	] = await Promise.all([
		getFundPage({ slug }),
		getFundPerformanceEntity(slug, 'chart'),
		getFundPerformanceEntity(slug, 'heatmap'),
		getFundPerformanceEntity(slug, 'profit-table'),
	]);

	return (
		<Fund
			{...initialData.data}
			performanceData={{
				heatMap: initialHeatMapData,
				graphics: initialGraphicData,
				profitTable: initialProfitTableData,
			}}
		/>
	);
};

export default FundPage;
