import type { Metadata } from 'next';

import { getArticle } from '@/shared/api/get-article';
import { getMediaPage } from '@/shared/api/get-media-page';
import { Media } from '@/view/media';
import { MEDIA_META } from '@/view/media/model/media.constants';

export const metadata: Metadata = MEDIA_META;

const MediaPage = async ({
	searchParams,
}: {
	searchParams: { filter?: { category?: string } };
}) => {
	const { filter } = await searchParams;
	const tag = filter && filter.category !== 'all' ? filter.category : undefined;

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
