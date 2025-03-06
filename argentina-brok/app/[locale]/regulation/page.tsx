import type { Metadata } from 'next';

import { getRegulation } from '@/shared/api/get-regulation';
import { Regulation } from '@/view/regulation';
import { REGULATION_META } from '@/view/regulation/model/regulation.meta';
import type { RegulationPageResponse } from '@/view/regulation/types/response';

export const metadata: Metadata = REGULATION_META;

export const revalidate = 10;

const RegulationPage = async () => {
	const initialRegulation: RegulationPageResponse = await getRegulation();

	return <Regulation {...initialRegulation.data} />;
};

export default RegulationPage;
