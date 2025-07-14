import apiClient from '@/shared/api/api-client';

export const getBrokeragePage = async () => {
	try {
		const response = await apiClient.get('/brokerage');

		return response.data;
	} catch (error) {
		console.error(error);
	}
};
