import apiClient from '@/shared/api/api-client';

export const getCareersAtArmbrockPage = async () => {
	try {
		const response = await apiClient.get('/careers-at-armbrok');

		return response.data;
	} catch (error) {
		console.error(error);
	}
};
