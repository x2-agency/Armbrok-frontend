'use client';

import cx from 'clsx';
import parser from 'html-react-parser';

import useMediaQuery from '@/shared/hooks/use-media-query';
import type { EventItemType } from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import { Events } from './ui/events';

export type CorporateEventsProps = {
	title?: string;
	events?: Array<EventItemType>;
};

export const CorporateEvents = ({ title, events }: CorporateEventsProps) => {
	const isMaxDesktop = useMediaQuery('(max-width: 1440px)');

	if (!events) {
		return null;
	}

	return (
		<>
			<Container category="section" className={css.root}>
				{title && <h2 className={css.title}>{parser(title)}</h2>}
			</Container>
			<Container
				className={cx({ [css.fullWidth]: isMaxDesktop })}
				category="div"
			>
				<Events className={css.event} events={events} />
			</Container>
		</>
	);
};
