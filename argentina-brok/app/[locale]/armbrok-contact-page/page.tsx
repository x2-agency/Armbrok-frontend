import { getContactPage } from '@/shared/api/get-contact-page';
import { ArmbrokContact } from '@/view/armbrok-contact';
import type { ArmbrokContactPageResponse } from '@/view/armbrok-contact/types/response';

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
