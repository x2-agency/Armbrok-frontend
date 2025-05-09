import type { Metadata } from 'next';
import { Suspense } from 'react';

import { getArticle } from '@/shared/api/get-article';
import { getMediaPage } from '@/shared/api/get-media-page';
import { getParentFunds } from '@/shared/api/get-parent-funds';
import { Media } from '@/view/media';

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

export const revalidate = 60;

const MediaPage = async () => {
	const [initialMediaData, initialArticles, initialFunds] = await Promise.all([
		getMediaPage(),
		getArticle({ limit: 0 }),
		getParentFunds(),
	]);

	return (
		<Suspense>
			<Media
				initialMediaData={initialMediaData}
				initialArticles={initialArticles}
				parentFunds={initialFunds.data}
			/>
		</Suspense>
	);
};

export default MediaPage;
