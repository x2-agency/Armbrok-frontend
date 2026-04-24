import apiClient from '@/shared/api/api-client';

export const getSecurityPapers = async () => {
	try {
		const response = await apiClient.get('/security-papers?sort=rank:asc');

		return response.data;
	} catch (error) {
		console.error(error);
	}
};
