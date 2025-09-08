import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { getClientRightsPage } from '@/shared/api/get-client-rights';
import { getParentFunds } from '@/shared/api/get-parent-funds';
import type { LocaleParams } from '@/shared/types/params';
import { ClientRights } from '@/view/client-rights';

export async function generateMetadata(): Promise<Metadata> {
	const initialClientRightsPageData = await getClientRightsPage();
	const seo = initialClientRightsPageData?.data?.seo;

	if (!seo) {
		return {
			title: 'Client Rights',
		};
	}

	return {
		metadataBase: process.env.NEXT_PUBLIC_WEBSITE_URL
			? new URL(process.env.NEXT_PUBLIC_WEBSITE_URL)
			: undefined,
		title: seo.metaTitle,
		description: seo.metaDescription,
		openGraph: {
			title: seo.metaTitle,
			description: seo.metaDescription,
			images: seo.shareImage ? [seo.shareImage.url] : [],
		},
	};
}

export const revalidate = 1;

const ClientRightsPage = async ({ params }: LocaleParams) => {
	const { locale } = await params;
	setRequestLocale(locale);

	const [initialClientRightsPageData, initialFunds] = await Promise.all([
		getClientRightsPage(),
		getParentFunds(),
	]);

	initialClientRightsPageData.data.parentFunds = initialFunds.data;

	return (
		<ClientRights initialData={initialClientRightsPageData || undefined} />
	);
};

export default ClientRightsPage;
