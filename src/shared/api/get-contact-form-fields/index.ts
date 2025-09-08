import apiClient from '@/shared/api/api-client';
import type { BaseResponse } from '@/shared/types/global.types';

export type GetContactFormFieldsType = BaseResponse<{
	privacyPolicyText?: string;
}>;

export const getContactFormFields = async (): Promise<
	GetContactFormFieldsType | undefined
> => {
	try {
		const response = await apiClient.get('/contact-form-fields');

		return response.data;
	} catch (error) {
		console.error(error);

		return;
	}
};
