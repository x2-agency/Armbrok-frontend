import axios from 'axios';

import type { RegulationInternalsType } from '@/shared/types/regulations';

type GetAllRegulationInternalsResponse = {
	data?: Array<RegulationInternalsType>;
};

export const getAllRegulationInternals =
	async (): Promise<GetAllRegulationInternalsResponse | null> => {
		try {
			const response = await axios.get(
				`${process.env.NEXT_PUBLIC_API_URL}/regulation-internals`
			);

			return response.data;
		} catch (error) {
			console.error(error);

			return null;
		}
	};
