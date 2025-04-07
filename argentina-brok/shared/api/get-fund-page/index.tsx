import apiClient from '@/shared/api/api-client';

type GetFundPageProps = {
	slug: string;
};

export const getFundPage = async ({ slug }: GetFundPageProps) => {
	try {
		const response = await apiClient.get(`/fund-profixes/${slug}`);

		return response.data;
	} catch (error) {
		console.error(error);
	}
};
