import type { FormValues as ContactUsFormValuesType } from '@/features/contact-form/ui/form';
import apiClient from '@/shared/api/api-client';
import type { PostFormSuccessResponseType } from '@/shared/types/global.types';

export type PostContactUsFormProps = {
	data: ContactUsFormValuesType;
};

export const postContactUsForm = async ({
	data,
}: PostContactUsFormProps): Promise<
	PostFormSuccessResponseType | undefined
> => {
	try {
		let fileId: number | undefined;

		if (data.file?.[0]) {
			const formData = new FormData();
			formData.append('files', data.file[0]);

			const fileResponse = await apiClient.post('/upload', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});

			fileId = fileResponse.data[0]?.id;
		}

		const response = await apiClient.post('/contact-forms', {
			data: {
				...data,
				file: fileId || null,
			},
		});

		return response.data;
	} catch (error) {
		console.error('Error submitting contact form:', error);
		throw new Error('Failed to submit contact form');
	}
};
