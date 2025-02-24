import apiClient from '@/shared/api/api-client';
import type { ArticleData } from '@/shared/types/article';

export type GetArticleProps = {
	limit?: number;
	start?: number;
	fields?: Array<string>;
	populate?: object;
	filters?: object;
	page?: number;
	pageSize?: number;
};

export const getArticle = async (
	queryParams?: GetArticleProps
): Promise<ArticleData> => {
	const params = {
		pagination: {
			limit: queryParams?.limit,
			start: queryParams?.start,
			page: queryParams?.page,
			pageSize: queryParams?.pageSize,
		},
		fields: queryParams?.fields,
		populate: queryParams?.populate,
		filters: queryParams?.filters,
	};

	const response = await apiClient.get('/articles', { params });
	console.log(response.data);
	return response.data;
};
