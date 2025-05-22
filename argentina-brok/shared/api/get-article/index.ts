import axios from 'axios';

import apiClient from '@/shared/api/api-client';
import type { ArticlesData } from '@/shared/types/article';

export type GetArticlesParams = {
	limit?: number;
	offset?: number;
	filters?: { category?: string };
	page?: number;
};

export const getArticle = async (
	params?: GetArticlesParams
): Promise<ArticlesData> => {
	const { limit = 5, page = 1, filters } = params || {};

	try {
		const response = await apiClient.get('/articles', {
			params: {
				...(filters?.category &&
					filters.category !== 'all' && {
						'filters[category][slug][$eq]': filters.category,
					}),
				'pagination[page]': page,
				'pagination[pageSize]': limit,
				sort: 'publishDate:desc',
			},
		});

		return response.data as ArticlesData;
	} catch (error) {
		console.error(error);
		return {
			data: [],
			categories: [],
			meta: { pagination: { page: 1, pageCount: 0, total: 0 } },
		};
	}
};

export const getIsrArticles = async (
	params?: GetArticlesParams
): Promise<ArticlesData> => {
	const { limit = 5, page = 1, filters } = params || {};

	try {
		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_API_URL}/articles`,
			{
				params: {
					...(filters?.category &&
						filters.category !== 'all' && {
							'filters[category][slug][$eq]': filters.category,
						}),
					'pagination[page]': page,
					'pagination[pageSize]': limit,
					sort: 'publishDate:desc',
				},
			}
		);

		return response.data as ArticlesData;
	} catch (error) {
		console.error(error);
		return {
			data: [],
			categories: [],
			meta: { pagination: { page: 1, pageCount: 0, total: 0 } },
		};
	}
};
