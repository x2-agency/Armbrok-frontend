'use client';

import type { NextPage } from 'next';

import { ContactFormSection } from '@/features/contact-form';
import { useUpdateFooterData } from '@/shared/hooks/use-update-footer-data';
import { TitleSection } from '@/shared/ui/title-section';
import { ContactCardsSection } from '@/widgets/contact-cards';

import css from './index.module.css';
import type { ArmbrokContactPageData } from './types/response';

export const ArmbrokContact: NextPage<ArmbrokContactPageData> = ({
	publishedAt,
	title,
	description,
	contactCards,
	contactForm,
}) => {
	useUpdateFooterData(publishedAt);

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
