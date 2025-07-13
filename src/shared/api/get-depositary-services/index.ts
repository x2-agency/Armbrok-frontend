import apiClient from '@/shared/api/api-client';

export const getDepositaryServicesPage = async () => {
	try {
		const response = await apiClient.get('/depositary-services');

		return response.data;
	} catch (error) {
		console.error(error);
	}
};
