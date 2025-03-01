import { Suspense } from 'react';

import type { MediaProps } from '@/shared/types/media-page';
import { Media } from '@/view/media';

const MediaPage = async ({
	searchParams,
}: {
	searchParams: { category?: string };
}) => {
	// const { category } = searchParams;
	// const tag = category === 'all' ? undefined : category;

	// let initialMediaData: MediaProps = {} as MediaProps;
	// const filters = tag ? { category: { name: { $eq: tag } } } : undefined;
	// initialMediaData = await getMediaPage(category);

	return (
		<Suspense>
			<Media initialMediaData={{} as MediaProps} />
		</Suspense>
	);
};

export default MediaPage;
