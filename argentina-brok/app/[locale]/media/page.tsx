import type { Metadata } from 'next';

import { getArticle } from '@/shared/api/get-article';
import { getMediaPage } from '@/shared/api/get-media-page';
import { Media } from '@/view/media';

// Генерация метаданных
export async function generateMetadata(): Promise<Metadata> {
	const initialMediaPageData = await getMediaPage();
	const seo = initialMediaPageData?.data?.seo;

	if (!seo) {
		return {
			title: 'Home',
		};
	}

	return {
		metadataBase: process.env.WEBSITE_DOMAIN
			? new URL(process.env.WEBSITE_DOMAIN)
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

type SearchParams = {
	category?: string;
};

const MediaPage = async ({ searchParams }: { searchParams: SearchParams }) => {
	const tag =
		searchParams.category && searchParams.category !== 'all'
			? searchParams.category
			: undefined;

	const initialMediaData = await getMediaPage();
	const initialArticles = await getArticle(
		tag ? { filters: { category: tag } } : {}
	);

	return (
		<Media
			initialMediaData={initialMediaData}
			initialArticles={initialArticles}
		/>
	);
};

export default MediaPage;
