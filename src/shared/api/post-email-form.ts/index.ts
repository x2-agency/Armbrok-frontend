import apiClient from '@/shared/api/api-client';

export type PostEmailFormData = {
	data: {
		email: string;
		locale?: string;
	};
};

export const postEmailForm = async (
	{ data }: PostEmailFormData,
	endpoint: string
) => {
	try {
		const response = await apiClient.post(endpoint, { data });

		return response.status;
	} catch (error) {
		console.error(error);
	}
};
