'use client';

import type { NextPage } from 'next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect } from 'react';

import { FeedbackForm } from '@/features/feedback-form';
import { useGetArticles } from '@/features/get-articles/api/use-get-articles';
import type { ArticlesData } from '@/shared/types/article';
import type { MediaPageProps } from '@/shared/types/media-page';
import { Preloader } from '@/shared/ui/preloader';
import { TitleSlugSection } from '@/shared/ui/title-slug-section';
import { NewsPage } from '@/widgets/news-page';
import { Tabs } from '@/widgets/tabs';
import { Vacancy } from '@/widgets/vacancies-section/ui/vacancy';

import css from './index.module.css';

export const Media: NextPage<{
	initialMediaData?: MediaPageProps;
	initialArticles?: ArticlesData;
}> = ({ initialMediaData, initialArticles }) => {
	const { glossaryCard, emailForm, title, description } =
		initialMediaData?.data ?? {};

	const router = useRouter();
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const currentTag = searchParams?.get('category') ?? 'all';

	const { fetchNextPage, isFetching, hasNextPage, isFetchingNextPage } =
		useGetArticles({ filters: { category: currentTag } }, initialArticles);

	const filteredNews = initialArticles?.data?.filter(
		article => currentTag === 'all' || article.category === currentTag
	);

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
			const queryString = createQueryString('category', value);
			router.push(`${pathname}?${queryString}`, { scroll: false });
		},
		[router, pathname, createQueryString]
	);

	useEffect(() => {
		fetchNextPage();
	}, [currentTag, fetchNextPage]);

	return (
		<section className={css.root}>
			<TitleSlugSection title={title} description={description} />
			<Tabs
				className={css.tabs}
				onChangeTab={onChangeTab}
				currentTag={currentTag}
				tags={initialArticles?.categories}
				isCasesExists
				initialTag="all"
			/>
			{!isFetchingNextPage ? (
				<NewsPage
					newsCard={filteredNews}
					isFetching={isFetching}
					hasNextPage={hasNextPage}
					fetchNextPage={fetchNextPage}
				/>
			) : (
				<Preloader className={css.loader} />
			)}
			<Vacancy className={css.vacancy} data={glossaryCard} />
			<FeedbackForm
				title={emailForm?.title}
				description={emailForm?.description}
				subscribeButtonText={emailForm?.subscribeButtonText}
			/>
		</section>
	);
};
