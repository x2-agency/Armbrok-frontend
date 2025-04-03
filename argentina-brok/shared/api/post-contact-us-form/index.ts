import apiClient from '@/shared/api/api-client';

export type PostContactUsFormProps = {
	data: {
		email: string;
		name: string;
		subject: string;
		message: string;
		formSubject: string;
	};
};

export const postContactUsForm = async ({ data }: PostContactUsFormProps) => {
	try {
		const response = await apiClient.post('/contact-forms', { data });

		return response.status;
	} catch (error) {
		console.error(error);
	}
};
