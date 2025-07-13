import apiClient from '@/shared/api/api-client';

export const getVacancies = async () => {
	try {
		const response = await apiClient.get('/vacancies');

		return response.data;
	} catch (error) {
		console.error(error);
	}
};
