import apiClient from '@/shared/api/api-client';

export type PostEmailFormData = {
	email: string;
	locale?: string;
};

export const postEmailForm = async ({ email }: PostEmailFormData) => {
	try {
		const response = await apiClient.post('/email-forms', { email});

		return response.status;
	} catch (error) {
		console.error(error);
	}
};
