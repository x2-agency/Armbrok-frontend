import type { Metadata } from 'next';

import { getContactPage } from '@/shared/api/get-contact-page';
import { getParentFunds } from '@/shared/api/get-parent-funds';
import { ArmbrokContact } from '@/view/armbrok-contact';

export async function generateMetadata(): Promise<Metadata> {
	const initialContactPageData = await getContactPage();
	const seo = initialContactPageData?.data?.seo;

	if (!seo) {
		return {
			title: 'Contact us',
		};
	}

	return {
		metadataBase: process.env.WEBSITE_DOMAIN
			? new URL(process.env.WEBSITE_DOMAIN)
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

export const revalidate = 10;

const ArmbrokContactPage = async () => {
	const [inititalContactPageData, initialFunds] = await Promise.all([
		getContactPage(),
		getParentFunds(),
	]);

	return (
		<ArmbrokContact
			publishedAt={inititalContactPageData.data.publishedAt}
			title={inititalContactPageData.data.title}
			description={inititalContactPageData.data.description}
			contactCards={inititalContactPageData.data.contactCards}
			contactForm={inititalContactPageData.data.contactForm}
			mapCoords={inititalContactPageData.data.mapCoords}
			parentFunds={initialFunds.data}
		/>
	);
};

export default ArmbrokContactPage;
