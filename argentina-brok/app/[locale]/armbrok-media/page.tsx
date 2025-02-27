import { Suspense } from 'react';

import type { MediaProps } from '@/shared/types/media-page';
import { ArmbrokMedia } from '@/view/armbrok-media';

const ArmbrokMediaPage = async ({
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
			<ArmbrokMedia initialMediaData={{} as MediaProps} />
		</Suspense>
	);
};

export default ArmbrokMediaPage;
