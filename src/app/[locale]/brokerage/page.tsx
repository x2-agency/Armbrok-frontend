import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { getBrokeragePage } from '@/shared/api/get-brokerage';
import type { LocaleParams } from '@/shared/types/params';
import { Brokerage } from '@/view/brokerage';

export async function generateMetadata(): Promise<Metadata> {
	const initialBrokeragePageData = await getBrokeragePage();
	const seo = initialBrokeragePageData?.data?.seo;

	if (!seo) {
		return {
			title: 'Brokerage',
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

export const revalidate = 1;

const BrokeragePage = async ({ params }: LocaleParams) => {
	const { locale } = await params;
	setRequestLocale(locale);

	const [initialBrokeragePageData] = await Promise.all([getBrokeragePage()]);

	return <Brokerage initialData={initialBrokeragePageData || undefined} />;
};

export default BrokeragePage;
