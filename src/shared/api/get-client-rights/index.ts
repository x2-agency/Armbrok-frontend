import apiClient from '@/shared/api/api-client';

export const getClientRightsPage = async () => {
	try {
		const response = await apiClient.get('/client-rights');

		return response.data;
	} catch (error) {
		console.error(error);
	}
};
