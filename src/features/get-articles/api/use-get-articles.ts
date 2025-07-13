'use client';

import type { UseInfiniteQueryResult } from '@tanstack/react-query';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

import type { GetArticlesParams } from '@/shared/api/get-article';
import { getArticle } from '@/shared/api/get-article';
import type { ArticlesData } from '@/shared/types/article';

export type InfiniteQueryPage<T> = {
	pageParams: Array<number>;
	pages: Array<T>;
};

export type PagedResponse = {
	page?: number | null;
	pageCount: number;
	total: number;
};

export const DEFAULT_PAGED_RESPONSE: PagedResponse = {
	page: 1,
	pageCount: 0,
	total: 0,
};

export const QUERY_KEYS = {
	articles: '/articles',
};

export const useGetArticles = (
params?: GetArticlesParams, initialArticles?: ArticlesData | undefined): UseInfiniteQueryResult<InfiniteQueryPage<ArticlesData>, Error> => {
	const searchParams = useSearchParams();
	const category = searchParams.get('category') || 'all';

	const stableFilters = useMemo(
		() => ({ ...params?.filters, category }),
		[params, category]
	);

	return useInfiniteQuery({
		queryKey: [QUERY_KEYS.articles, stableFilters],
		initialPageParam: 1,
		queryFn: ({ pageParam }) =>
			getArticle({ ...params, page: pageParam, filters: stableFilters }),
		getNextPageParam: (lastPage: ArticlesData) => {
			const { page, pageCount } = lastPage.meta?.pagination ?? {};
			return page && pageCount && page < pageCount ? page + 1 : undefined;
		},
		staleTime: 1000 * 60 * 5,
		gcTime: 1000 * 60 * 60,
	});
};
