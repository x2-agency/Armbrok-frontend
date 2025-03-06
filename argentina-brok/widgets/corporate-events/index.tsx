'use client';

import cx from 'clsx';
import parser from 'html-react-parser';

import type { EventItemType } from '@/shared/types/global.types';

import css from './index.module.css';
import { Events } from './ui/events';

export type CorporateEventsProps = {
	title?: string;
	events?: Array<EventItemType>;
	className?: string;
};

export const CorporateEvents = ({
	title,
	events,
	className,
}: CorporateEventsProps) => {
	if (!events) {
		return null;
	}

	return (
		<section className={cx(css.root, className)}>
			{title && <h2 className={css.title}>{parser(title)}</h2>}

			<Events className={css.event} events={events} />
		</section>
	);
};
