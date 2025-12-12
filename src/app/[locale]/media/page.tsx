import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Suspense } from 'react';

import { getArticle } from '@/shared/api/get-article';
import { getMediaPage } from '@/shared/api/get-media-page';
import { generateTemplateMetadata } from '@/shared/helpers/generate-template-metadata';
import type { LocaleParams } from '@/shared/types/params';
import { Media } from '@/view/media';

export async function generateMetadata(): Promise<Metadata> {
	const initialMediaPageData = await getMediaPage();

	return generateTemplateMetadata({ seo: initialMediaPageData?.data?.seo });
}

export const revalidate = 1;

const MediaPage = async ({ params }: LocaleParams) => {
	const { locale } = await params;
	setRequestLocale(locale);

	const [initialMediaData, initialArticles] = await Promise.all([
		getMediaPage(),
		getArticle({ limit: 0 }),
	]);

	return (
		<Suspense>
			<Media
				initialMediaData={initialMediaData}
				initialArticles={initialArticles}
			/>
		</Suspense>
	);
};

export default MediaPage;
