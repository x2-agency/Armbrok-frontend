import { Suspense } from 'react';

import { getArticle } from '@/shared/api/get-article';
import { getMediaPage } from '@/shared/api/get-media-page';
import type { ArticleData } from '@/shared/types/article';
import type { MediaProps } from '@/shared/types/media-page';
import { ArmbrokMedia } from '@/view/armbrok-media';
import { INITIAL_LIMIT } from '@/widgets/app-layout/config/api.constants';

const ArmbrokMediaPage = async ({
	searchParams,
}: {
	searchParams: { category?: string };
}) => {
	const { category } = searchParams;
	const tag = category === 'all' ? undefined : category;

	let initialData: ArticleData = { data: [] };
	let initialMediaData: MediaProps = {} as MediaProps;

	try {
		initialData = await getArticle(
			INITIAL_LIMIT,
			0,
			undefined,
			undefined,
			undefined,
			tag
		);
		initialMediaData = await getMediaPage();
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
