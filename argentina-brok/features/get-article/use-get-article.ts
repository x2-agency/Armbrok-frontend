import type { InfiniteData, InitialDataFunction } from '@tanstack/react-query';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useMemo, useState } from 'react';

import { getArticle } from '@/shared/api/get-article';
import type { ArticleData, GetArticlesResponse } from '@/shared/types/article';

export const useGetArticles = (
	queryKey: string | Array<string>,
	initialLimit = 10,
	initialOffset = 0,
	category?: string,
	initialData?:
		| InfiniteData<ArticleData>
		| InitialDataFunction<InfiniteData<ArticleData>>
		| undefined,
	myPageParam = 0
) => {
	const [loadMore, setLoadMore] = useState<undefined | boolean>();

	const handleNextPage = (
		last: ArticleData | undefined,
		all: Array<ArticleData>
	) => {
		const totalPosts = last?.total ?? 0;
		const postsCount = all.flatMap(item => item?.items ?? []).length;

		return postsCount < totalPosts ? postsCount : undefined;
	};

	const queryKeyArray = useMemo(() => {
		const categoryKey = category && category !== 'all' ? category : undefined;
		return Array.isArray(queryKey)
			? [...queryKey, categoryKey]
			: [queryKey, categoryKey];
	}, [queryKey, category]);

	const { fetchNextPage, data, isFetching, hasNextPage } =
		useInfiniteQuery<GetArticlesResponse>(
			queryKeyArray,
			({ pageParam = myPageParam }) =>
				getArticle(
					initialLimit,
					pageParam ?? initialOffset,
					category === 'all' ? undefined : category
				),
			{
				getNextPageParam: handleNextPage,
				refetchOnMount: false,
				refetchOnReconnect: false,
				refetchOnWindowFocus: false,
				keepPreviousData: true,
			}
		);

	useEffect(() => {
		if (loadMore && !isFetching) {
			fetchNextPage().finally(() => {
				setLoadMore(false);
			});
		}
	}, [loadMore, fetchNextPage, isFetching]);

	const items = data?.pages.length ? data.pages.flatMap(item => item) : [];

	return {
		items,
		setLoadMore,
		isFetching,
		isHasMore: !!hasNextPage,
	};
};
