import apiClient from '@/shared/api/api-client';

export const getBlogPage = async (slug: string) => {
	try {
		const response = await apiClient.get(`/media?slug=${slug}`);

		return response.data;
	} catch (error) {
		console.error(error);
		return null;
	}
};
