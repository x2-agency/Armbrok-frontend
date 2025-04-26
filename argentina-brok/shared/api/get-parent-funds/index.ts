import apiClient from '@/shared/api/api-client';

export const getParentFunds = async () => {
	try {
		const response = await apiClient.get('/fund-profixes?type=card');

		return response.data;
	} catch (error) {
		console.error(error);
		return { data: [] };
	}
};
