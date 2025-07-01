import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { getFundPage } from '@/shared/api/get-fund-page';
import { getFundPerformanceEntity } from '@/shared/api/get-graphic';
import { getIsrParentFunds } from '@/shared/api/get-isr-parent-funds';
import { getParentFunds } from '@/shared/api/get-parent-funds';
import type { ParentFundProps } from '@/shared/types/global.types';
import type { LocaleParams, SlugParams } from '@/shared/types/params';
import { Fund } from '@/view/fund';

export async function generateMetadata({
	params,
}: SlugParams): Promise<Metadata> {
	const { slug } = await params;
	const initialFundPageData = await getFundPage({ slug });
	const seo = initialFundPageData?.data?.seo;

	if (!seo) {
		return {
			title: 'Fund',
		};
	}

	return {
		metadataBase: process.env.NEXT_PUBLIC_WEBSITE_URL
			? new URL(process.env.NEXT_PUBLIC_WEBSITE_URL)
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

export const generateStaticParams = async () => {
	const response: { data: Array<ParentFundProps> } = await getIsrParentFunds();
	const locales = ['en', 'ru', 'hy'];

	return locales.flatMap(locale =>
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
		initialFunds,
	] = await Promise.all([
		getFundPage({ slug }),
		getFundPerformanceEntity(slug, 'chart'),
		getFundPerformanceEntity(slug, 'heatmap'),
		getFundPerformanceEntity(slug, 'profit-table'),
		getParentFunds(),
	]);

	return (
		<Fund
			{...initialData.data}
			performanceData={{
				heatMap: initialHeatMapData,
				graphics: initialGraphicData,
				profitTable: initialProfitTableData,
			}}
			parentFunds={initialFunds.data}
		/>
	);
};

export default FundPage;
