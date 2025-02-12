'use client';

import cx from 'clsx';

import useMediaQuery from '@/shared/hooks/use-media-query';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import type { EventType } from './ui/event';
import { Events } from './ui/events';

export type CorporateEventsProps = {
	title: string;
	events: Array<EventType>;
};

export const CorporateEvents = ({ title, events }: CorporateEventsProps) => {
	const isMaxDesctop = useMediaQuery('(max-width: 1440px)');

	return (
		<>
			<Container category="section" className={css.root}>
				<h2 className={css.title}>{title}</h2>
			</Container>
			<Container
				className={cx({ [css.fullWidth]: isMaxDesctop })}
				category="div"
			>
				<Events className={css.event} events={events} />
			</Container>
		</>
	);
};
