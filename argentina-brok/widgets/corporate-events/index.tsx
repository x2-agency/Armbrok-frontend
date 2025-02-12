import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import type { EventType } from './ui/event';
import { Events } from './ui/events';

export type CorporateEventsProps = {
	title: string;
	events: Array<EventType>;
};

export const CorporateEvents = ({ title, events }: CorporateEventsProps) => {
	return (
		<>
			<Container category="section" className={css.root}>
				<h2 className={css.title}>{title}</h2>
			</Container>
			<Events className={css.event} events={events} />
		</>
	);
};
