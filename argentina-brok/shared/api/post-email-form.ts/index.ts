import apiClient from '@/shared/api/api-client';

export type PostEmailFormData = {
	data: {
		email: string;
		locale?: string;
	};
};

export const postEmailForm = async ({ data }: PostEmailFormData) => {
	try {
		const response = await apiClient.post('/email-forms', { data });

		return response.status;
	} catch (error) {
		console.error(error);
	}
};
