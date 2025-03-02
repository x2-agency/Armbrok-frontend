import apiClient from '@/shared/api/api-client';

export const getContactPage = async () => {
	try {
		const response = await apiClient.get('/contact-page');

		return response.data;
	} catch (error) {
		console.error(error);
	}
};
