import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { getContactPage } from '@/shared/api/get-contact-page';
import { generateTemplateMetadata } from '@/shared/helpers/generate-template-metadata';
import type { LocaleParams } from '@/shared/types/params';
import { ArmbrokContact } from '@/view/armbrok-contact';

export async function generateMetadata(): Promise<Metadata> {
	const initialContactPageData = await getContactPage();

	return generateTemplateMetadata({
		seo: initialContactPageData?.data?.seo,
	});
}

export const revalidate = 1;

const ArmbrokContactPage = async ({ params }: LocaleParams) => {
	const { locale } = await params;
	setRequestLocale(locale);

	const [inititalContactPageData] = await Promise.all([getContactPage()]);

	return (
		<ArmbrokContact
			publishedAt={inititalContactPageData.data.publishedAt}
			title={inititalContactPageData.data.title}
			description={inititalContactPageData.data.description}
			contactCards={inititalContactPageData.data.contactCards}
			contactForm={inititalContactPageData.data.contactForm}
			mapCoords={inititalContactPageData.data.mapCoords}
		/>
	);
};

export default ArmbrokContactPage;
