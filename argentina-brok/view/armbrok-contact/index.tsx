import type { NextPage } from 'next';

import { ContactFormSection } from '@/features/contact-form';
import { TitleSection } from '@/shared/ui/title-section';
import { ContactCardsSection } from '@/widgets/contact-cards';

import css from './index.module.css';
import type { ArmbrokContactPageData } from './types/response';

export const ArmbrokContact: NextPage<ArmbrokContactPageData> = ({
	title,
	description,
	contactCards,
	contactForm,
}) => {
	return (
		<div className={css.root}>
			<TitleSection
				title={title ?? ''}
				description={description}
				className={css.titleSection}
			/>
			<ContactCardsSection contacts={contactCards} />
			{contactForm && <ContactFormSection {...contactForm} />}
		</div>
	);
};
