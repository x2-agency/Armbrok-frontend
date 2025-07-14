import apiClient from '@/shared/api/api-client';

export const getHomePage = async () => {
	try {
		const response = await apiClient.get('/home');

		return response.data;
	} catch (error) {
		console.error(error);
	}
};
