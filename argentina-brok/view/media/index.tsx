'use client';

import type { NextPage } from 'next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

import type { MediaProps } from '@/shared/types/media-page';
import { TitleSlugSection } from '@/shared/ui/title-slug-section';
import { FeedbackForm } from '@/widgets/feedback-form';
import { Tabs } from '@/widgets/tabs';

import css from './index.module.css';
import { MEDIA_EMAIL, MEDIA_TITLE } from './model/media.constants';

export const Media: NextPage<{
	initialMediaData: MediaProps;
}> = initialData => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const currentTag = searchParams?.get('category') ?? 'all';

	// const tags: Array<Category> = useMemo(() => {
	// 	const categories = initialData?.initialMediaData?.data?.articles.map(
	// 		article => article.category
	// 	);
	// 	return Array.from(new Set(categories)).filter(Boolean) as Array<Category>;
	// }, [initialData.initialMediaData]);

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			if (value && value !== 'all') {
				params.set(name, value);
			} else {
				params.delete(name);
			}
			return params.toString();
		},
		[searchParams]
	);

	const onChangeTab = useCallback(
		(value: string) => {
			router.push(pathname + '?' + createQueryString('category', value), {
				scroll: false,
			});
		},
		[router, pathname, createQueryString]
	);
	return (
		<section className={css.root}>
			<TitleSlugSection
				title={MEDIA_TITLE.title}
				description={MEDIA_TITLE.description}
			/>
			<Tabs
				className={css.tabs}
				onChangeTab={onChangeTab}
				currentTag={currentTag}
				// tags={tags}
				isCasesExists
				initialTag="all"
			/>
			{/* <NewsPage
				newsCard={initialData.initialMediaData.data.articles}
				isHasMore={currentTag === 'all'}
			/>
			<Vacancy
				className={css.vacancy}
				data={initialData.initialMediaData.data.glossaryCard}
			/> */}
			<FeedbackForm title={MEDIA_EMAIL.title} />
		</section>
	);
};
