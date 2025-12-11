import apiClient from '@/shared/api/api-client';

export const getIsrParentFunds = async () => {
	try {
		const response = await apiClient.get(
			`/fund-profixes?type=card&sort=rank:asc`
		);

		return response.data;
	} catch (error) {
		console.error(error);

		return { data: [] };
	}
};
