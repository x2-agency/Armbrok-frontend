import apiClient from '@/shared/api/api-client';
import type { ArticlesData } from '@/shared/types/article';

export type GetArticlesparams = {
	limit?: number;
	offset?: number;
	filters?: { category?: string };
	page?: number;
};

export const getArticle = async (
	params?: GetArticlesparams
): Promise<ArticlesData> => {
	const { limit = 5, page = 1, filters } = params || {};
	const response = await apiClient.get('/articles', {
		params: {
			...(filters?.category && {
				'filters[category][slug][$eq]': filters.category,
			}),
			'pagination[page]': page,
			'pagination[pageSize]': limit,
		},
	});
	return response.data as ArticlesData;
};
