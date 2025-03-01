'use client';

import type { UseInfiniteQueryResult } from '@tanstack/react-query';
import { useInfiniteQuery } from '@tanstack/react-query';

import type { GetArticlesparams } from '@/shared/api/get-article';
import { getArticle } from '@/shared/api/get-article';
import type { ArticlesData } from '@/shared/types/article';

export type InfiniteQueryPage<T> = {
	pageParams: Array<number>;
	pages: Array<T>;
};

export type PagedResponse = {
	page: number;
	totalPages: number;
	totalItems: number;
};

export const DEFAULT_PAGED_RESPONSE: PagedResponse = {
	page: 1,
	totalPages: 0,
	totalItems: 0,
};

export const QUERY_KEYS = {
	articles: '/articles',
};

export const useGetArticles = (
	params?: GetArticlesparams,
	initialData?: ArticlesData
): UseInfiniteQueryResult<InfiniteQueryPage<ArticlesData>, Error> => {
	const initialPageParams = initialData?.meta?.pagination.page
		? Array.from({ length: initialData.meta.pagination.page }, (_, i) => i + 1)
		: [];

	const initialInfinitePage: InfiniteQueryPage<ArticlesData> = {
		pages: [
			initialData ?? {
				data: [],
				...DEFAULT_PAGED_RESPONSE,
			},
		],
		pageParams: initialPageParams,
	};

	return useInfiniteQuery({
		queryKey: [QUERY_KEYS.articles, params?.filters],
		initialData: params?.filters ? undefined : initialInfinitePage,
		initialPageParam: 1,
		queryFn: ({ pageParam }) => getArticle({ ...params, page: pageParam }),
		getNextPageParam: (lastPage: ArticlesData) => {
			const { page, total } = lastPage.meta?.pagination ?? {};
			return page && total && page < total ? page + 1 : undefined;
		},
	});
};
