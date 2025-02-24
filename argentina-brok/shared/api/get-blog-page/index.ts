import apiClient from '@/shared/api/api-client';

export const getBlogPage = async () => {
	try {
		const response = await apiClient.get('/armbrok-blog-page');

		return response.data;
	} catch (error) {
		console.error(error);
	}
};
