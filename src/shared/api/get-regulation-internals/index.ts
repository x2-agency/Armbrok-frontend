import apiClient from '@/shared/api/api-client';

export const getRegulationInternals = async (slug: string) => {
	try {
		const response = await apiClient.get(`/regulation-internals/${slug}`);

		return response.data;
	} catch (error) {
		console.error(error);
		return null;
	}
};
