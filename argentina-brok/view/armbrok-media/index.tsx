'use client';

import type { NextPage } from 'next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo } from 'react';

import type { ArticleData, Category } from '@/shared/types/article';
import type { MediaProps } from '@/shared/types/media-page';
import { TitleSlugSection } from '@/shared/ui/title-slug-section';
import { FeedbackForm } from '@/features/feedback-form';
import { NewsPage } from '@/widgets/news-page';
import { Tabs } from '@/widgets/tabs';
import { Vacancy } from '@/widgets/vacancies-section/ui/vacancy';

import css from './index.module.css';
import {
	ARMBROK_MEDIA_EMAIL,
	ARMBROK_MEDIA_TITLE,
} from './model/armbrok-media.constants';

export const ArmbrokMedia: NextPage<{
	initialData: ArticleData;
	initialMediaData: MediaProps;
}> = initialData => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const currentTag = searchParams?.get('category') ?? 'all';

	const tags: Array<Category> = useMemo(() => {
		const categories = initialData.initialMediaData.data.articles.map(
			article => article.category
		);
		return Array.from(new Set(categories)).filter(Boolean) as Array<Category>;
	}, [initialData.initialMediaData]);

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
				title={ARMBROK_MEDIA_TITLE.title}
				description={ARMBROK_MEDIA_TITLE.description}
			/>
			<Tabs
				className={css.tabs}
				onChangeTab={onChangeTab}
				currentTag={currentTag}
				tags={tags}
				isCasesExists
				initialTag="all"
			/>
			<NewsPage
				newsCard={initialData.initialData.data}
				isHasMore={currentTag === 'all'}
			/>
			<Vacancy
				className={css.vacancy}
				data={initialData.initialMediaData.data.glossaryCard}
			/>
			<FeedbackForm title={ARMBROK_MEDIA_EMAIL.title} />
		</section>
	);
};
