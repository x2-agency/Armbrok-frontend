import { Suspense } from 'react';

import { getArticle } from '@/shared/api/get-article';
import { getMediaPage } from '@/shared/api/get-media-page';
import type { ArticleData } from '@/shared/types/article';
import type { MediaProps } from '@/shared/types/media-page';
import { ArmbrokMedia } from '@/view/armbrok-media';

const ArmbrokMediaPage = async ({
	searchParams,
}: {
	searchParams: { category?: string };
}) => {
	const INITIAL_LIMIT = 5;

	const { category } = searchParams;
	const tag = category === 'all' ? undefined : category;

	let initialData: ArticleData = { data: [] };
	let initialMediaData: MediaProps = {} as MediaProps;
	const filters = tag ? { category: { name: { $eq: tag } } } : undefined;
	try {
		initialData = await getArticle({
			pageSize: INITIAL_LIMIT,
			filters,
		});
		initialMediaData = await getMediaPage(category);
	} catch (error) {
		console.error(error);
	}

	return (
		<Suspense>
			<ArmbrokMedia
				initialData={initialData}
				initialMediaData={initialMediaData}
			/>
		</Suspense>
	);
};

export default ArmbrokMediaPage;
