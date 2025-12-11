import apiClient from '@/shared/api/api-client';
import type { RegulationInternalsType } from '@/shared/types/regulations';

type GetAllRegulationInternalsResponse = {
	data?: Array<RegulationInternalsType>;
};

export const getAllRegulationInternals =
	async (): Promise<GetAllRegulationInternalsResponse | null> => {
		try {
			const response = await apiClient.get(`/regulation-internals`);

			return response.data;
		} catch (error) {
			console.error(error);

			return null;
		}
	};
