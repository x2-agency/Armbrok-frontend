import apiClient from '@/shared/api/api-client';

export const getArmbrokSearchPage = async () => {
	try {
		const response = await apiClient.get('/search-page');

		return response.data;
	} catch (error) {
		console.error(error);
	}
};
