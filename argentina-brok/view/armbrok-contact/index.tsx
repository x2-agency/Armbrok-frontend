'use client';

import type { NextPage } from 'next';
import { useRef } from 'react';

import { ContactFormSection } from '@/features/contact-form';
import { useAppendToHeaderFunds } from '@/shared/hooks/use-append-to-header-funds';
import { useUpdateFooterData } from '@/shared/hooks/use-update-footer-data';
import { headerScrollObserver } from '@/shared/lib/header-scroll-observer';
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
	mapCoords,
	parentFunds,
}) => {
	useUpdateFooterData(publishedAt);
	useAppendToHeaderFunds({ funds: parentFunds });

	const ref = useRef<HTMLDivElement>(null);
	headerScrollObserver.useObserve('dark');

	return (
		<div ref={ref} className={css.root}>
			<TitleSection
				title={title ?? ''}
				description={description}
				className={css.titleSection}
			/>
			<ContactCardsSection contacts={contactCards} />
			{contactForm && (
				<ContactFormSection
					{...contactForm}
					latitude={mapCoords?.latitude}
					longitude={mapCoords?.longitude}
				/>
			)}
		</div>
	);
};
