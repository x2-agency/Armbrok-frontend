import apiClient from '@/shared/api/api-client';

export const getMediaPage = async () => {
	try {
		const response = await apiClient.get(`/media`);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
