import apiClient from '@/shared/api/api-client';

export const getAboutUsPage = async () => {
	try {
		const response = await apiClient('/about-us');

		return response.data;
	} catch (error) {
		console.error(error);
	}
};
