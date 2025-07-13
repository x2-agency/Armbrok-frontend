import apiClient from '@/shared/api/api-client';

export const getRegulation = async () => {
	try {
		const response = await apiClient.get('/documents-page');

		return response.data;
	} catch (error) {
		console.error(error);
	}
};
