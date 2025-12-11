import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { getClientRightsPage } from '@/shared/api/get-client-rights';
import { generateTemplateMetadata } from '@/shared/helpers/generate-template-metadata';
import type { LocaleParams } from '@/shared/types/params';
import { ClientRights } from '@/view/client-rights';

export async function generateMetadata(): Promise<Metadata> {
	const initialClientRightsPageData = await getClientRightsPage();

	return generateTemplateMetadata({
		seo: initialClientRightsPageData?.data?.seo,
	});
}

export const revalidate = 1;

const ClientRightsPage = async ({ params }: LocaleParams) => {
	const { locale } = await params;
	setRequestLocale(locale);

	const [initialClientRightsPageData] = await Promise.all([
		getClientRightsPage(),
	]);

	return (
		<ClientRights initialData={initialClientRightsPageData || undefined} />
	);
};

export default ClientRightsPage;
