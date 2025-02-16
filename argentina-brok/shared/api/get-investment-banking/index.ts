import apiClient from '@/shared/api/api-client';

export const getInvestmentBankingPage = async () => {
	try {
		const response = await apiClient.get('/investment-banking');

		return response.data;
	} catch (error) {
		console.error(error);
	}
};
