import type { Metadata } from 'next';

import { getRegulation } from '@/shared/api/get-regulation';
import { generateTemplateMetadata } from '@/shared/helpers/generate-template-metadata';
import { Regulation } from '@/view/regulation';

export async function generateMetadata(): Promise<Metadata> {
	const initialRegulationPageData = await getRegulation();

	return generateTemplateMetadata({
		seo: initialRegulationPageData?.data?.seo,
	});
}

export const revalidate = 1;

const RegulationPage = async () => {
	const [initialRegulation] = await Promise.all([getRegulation()]);

	return <Regulation {...initialRegulation.data} />;
};

export default RegulationPage;
