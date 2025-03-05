'use client';

import type { UseInfiniteQueryResult } from '@tanstack/react-query';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import type { GetArticlesparams } from '@/shared/api/get-article';
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
	params?: GetArticlesparams,
	initialData?: ArticlesData
): UseInfiniteQueryResult<InfiniteQueryPage<ArticlesData>, Error> => {
	const stableFilters = useMemo(() => params?.filters, [params?.filters]);

	const initialPageParams = initialData?.meta?.pagination.page
		? Array.from({ length: initialData.meta.pagination.page }, (_, i) => i + 1)
		: [];

	const initialInfinitePage: InfiniteQueryPage<ArticlesData> = {
		pages: [
			initialData ?? {
				data: [],
				meta: {
					pagination: DEFAULT_PAGED_RESPONSE,
				},
			},
		],
		pageParams: initialPageParams,
	};

	return useInfiniteQuery({
		queryKey: [QUERY_KEYS.articles, stableFilters],
		initialData: params?.filters ? undefined : initialInfinitePage,
		initialPageParam: 1,
		queryFn: ({ pageParam }) => getArticle({ ...params, page: pageParam }),
		getNextPageParam: (lastPage: ArticlesData) => {
			const { page, pageCount } = lastPage.meta?.pagination ?? {};

			if (page && pageCount && page < pageCount) {
				return page + 1;
			}
			return undefined;
		},
		staleTime: 1000 * 60 * 5,
	});
};
