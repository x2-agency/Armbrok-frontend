import apiClient from '@/shared/api/api-client';

export const getFooter = async () => {
	try {
		const response = await apiClient.get('/footer');

		return response.data;
	} catch (error) {
		console.error(error);
	}
};
