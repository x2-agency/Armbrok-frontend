import apiClient from '@/shared/api/api-client';

type RequestEntity = 'chart' | 'heatmap' | 'profit-table';

export const getFundPerformanceEntity = async (
	slug: string,
	entity: RequestEntity
) => {
	try {
		const response = await apiClient.get(`/fund-profixes/${slug}/${entity}`);

		return response.data;
	} catch (error) {
		console.error(error);
	}
};
