import apiClient from '@/shared/api/api-client';

export const getFundsPage = async () => {
	try {
		const response = await apiClient('/funds');

		return response.data;
	} catch (error) {
		console.error(error);
	}
};
