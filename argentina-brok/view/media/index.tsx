/* eslint-disable @typescript-eslint/no-unused-expressions */
'use client';

import type { NextPage } from 'next';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { FeedbackForm } from '@/features/feedback-form';
import { ENDPOINTS } from '@/features/feedback-form/model/feedback-form.constants';
import { useGetArticles } from '@/features/get-articles/api/use-get-articles';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useUpdateFooterData } from '@/shared/hooks/use-update-footer-data';
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
	const [searchQuery, setSearchQuery] = useState('');
	const [searchAnimationKey, setSearchAnimationKey] = useState('');

	const { glossaryCard, emailForm, title, description, publishedAt } =
		initialMediaData?.data ?? {};
	const router = useRouter();
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const currentTag = searchParams?.get('category') ?? 'all';

	const { data, fetchNextPage, isFetchingNextPage, hasNextPage, isLoading } =
		useGetArticles({ filters: { category: currentTag } }, initialArticles);

	const filteredNews = data?.pages.flatMap(page => page.data) ?? [];
	const searchLower = searchQuery.toLowerCase();
	const filteredBySearch = filteredNews.filter(news =>
		news?.title.toLowerCase().includes(searchLower)
	);

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			value && value !== 'all' ? params.set(name, value) : params.delete(name);
			return params.toString();
		},
		[searchParams]
	);

	const onChangeTab = useCallback(
		async (value: string) => {
			router.push(`${pathname}?${createQueryString('category', value)}`, {
				scroll: false,
			});
		},
		[router, pathname, createQueryString]
	);

	useUpdateFooterData(publishedAt);

	useEffect(() => {
		setSearchAnimationKey(searchQuery);
	}, [searchQuery]);

	return (
		<section className={css.root}>
			<TitleSlugSection title={title} description={description} />
			{/* <SearchNews onSearchChange={setSearchQuery} /> */}

			<div className={css['tabs-container']}>
				<Tabs
					className={css.tabs}
					onChangeTab={onChangeTab}
					currentTag={currentTag}
					tags={initialArticles?.categories ?? []}
					areCasesExist
					initialTag="all"
				/>
			</div>

			{isLoading ? (
				<Preloader className={css.loader} />
			) : (
				<NewsPage
					animationKey={`${currentTag}-${searchAnimationKey}`}
					newsCard={filteredBySearch}
					isFetchingNextPage={isFetchingNextPage}
					hasNextPage={hasNextPage}
					fetchNextPage={fetchNextPage}
				/>
			)}

			{isFetchingNextPage && <Preloader className={css.loader} />}

			<Vacancy className={css.vacancy} data={glossaryCard} />

			<FeedbackForm
				endpoint={ENDPOINTS.newsSubscription}
				title={emailForm?.title}
				description={emailForm?.description}
				subscribeButtonText={emailForm?.subscribeButtonText}
			/>
		</section>
	);
};
