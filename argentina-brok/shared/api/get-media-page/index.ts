import apiClient from '@/shared/api/api-client';

export const getMediaPage = async (category?: string) => {
	try {
		const response = await apiClient.get('/media', {
			params: {
				category,
			},
		});
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
