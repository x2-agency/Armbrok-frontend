import apiClient from '@/shared/api/api-client';
import type { ArticleData } from '@/shared/types/article';

export const getArticle = async (
	limit?: number,
	offset?: number,
	sort?: string,
	fields?: string,
	populate?: string,
	filters?: string
): Promise<ArticleData> => {
	const params = {
		limit: limit ?? 25,
		offset: offset ?? 0,
		sort,
		fields,
		populate,
		filters,
	};

	const response = await apiClient.get('/articles', {
		params,
	});

	return response.data;
};
