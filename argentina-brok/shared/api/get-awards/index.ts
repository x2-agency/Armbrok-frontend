import apiClient from '@/shared/api/api-client';

type AwardsRequestProps = {
	page?: number;
	pageSize?: number;
};

export const getAwards = async ({ page, pageSize }: AwardsRequestProps) => {
	try {
		const response = await apiClient.get('/awards?sort=rank:asc', {
			params: {
				pagination: {
					page,
					pageSize,
				},
			},
		});

		return response.data;
	} catch (error) {
		console.error(error);
	}
};
