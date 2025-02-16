import apiClient from '@/shared/api/api-client';

export const getAssetManagementPage = async () => {
	try {
		const response = await apiClient.get('/asset-management');

		return response.data;
	} catch (error) {
		console.error(error);
	}
};
