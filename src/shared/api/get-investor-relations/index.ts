import apiClient from '@/shared/api/api-client';

export const getInvestorRelations = async () => {
	try {
		const response = await apiClient.get('/investor-relations');
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
