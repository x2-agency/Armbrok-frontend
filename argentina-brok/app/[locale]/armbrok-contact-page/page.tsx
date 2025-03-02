import type { Metadata } from 'next';

import { getContactPage } from '@/shared/api/get-contact-page';
import { ArmbrokContact } from '@/view/armbrok-contact';
import { ARMBROK_CONTACT_META } from '@/view/armbrok-contact/model/armbrok-contact.meta';
import type { ArmbrokContactPageResponse } from '@/view/armbrok-contact/types/response';

export const metadata: Metadata = ARMBROK_CONTACT_META;

const ArmbrokContactPage = async () => {
	const inititalContactPageData: ArmbrokContactPageResponse =
		await getContactPage();

	return (
		<ArmbrokContact
			title={inititalContactPageData.data.title}
			description={inititalContactPageData.data.description}
			contactCards={inititalContactPageData.data.contactCards}
			contactForm={inititalContactPageData.data.contactForm}
		/>
	);
};

export default ArmbrokContactPage;
