import type { Metadata } from 'next';

import { getArticle } from '@/shared/api/get-article';
import { getMediaPage } from '@/shared/api/get-media-page';
import { Media } from '@/view/media';
import { MEDIA_META } from '@/view/media/model/media.constants';

export const metadata: Metadata = MEDIA_META;

export const revalidate = 10;

const MediaPage = async ({
	searchParams,
}: {
	searchParams: { category?: string };
}) => {
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
