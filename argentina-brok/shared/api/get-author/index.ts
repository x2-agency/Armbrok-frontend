import apiClient from '@/shared/api/api-client';

export const getAuthor = async () => {
	try {
		const response = await apiClient.get('/authors');

		return response.data;
	} catch (error) {
		console.error(error);
	}
};
