import apiClient from '@/shared/api/api-client';
import type { PostFormSuccessResponseType } from '@/shared/types/global.types';

export type PostContactUsFormProps = {
	data: {
		email: string;
		name: string;
		subject: string;
		message: string;
		formSubject: string;
	};
};

export const postContactUsForm = async ({
	data,
}: PostContactUsFormProps): Promise<
	PostFormSuccessResponseType | undefined
> => {
	try {
		const response = await apiClient.post('/contact-forms', { data });

		return response.data;
	} catch (error) {
		console.error(error);
	}
};
