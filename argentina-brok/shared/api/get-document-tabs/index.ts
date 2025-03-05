import apiClient from '@/shared/api/api-client';

export const getDocumentTabs = async () => {
	try {
		const response = apiClient.get('/document-tabs');

		return (await response).data;
	} catch (error) {
		console.error(error);
	}
};
