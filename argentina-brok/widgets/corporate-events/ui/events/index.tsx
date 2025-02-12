import cx from 'clsx';

import type { EventType } from '@/widgets/corporate-events/ui/event';
import { Event } from '@/widgets/corporate-events/ui/event';

import css from './index.module.css';

export type EventsPops = {
	events: Array<EventType>;
	className?: string;
};

export const Events = ({ events, className }: EventsPops) => {
	return (
		<div className={cx(css.root, className)}>
			{events.map((event, index) => (
				<Event
					className={cx(css.event, { [css.firstEvent]: index === 0 })}
					key={index}
					date={event.date}
					description={event.description}
				/>
			))}
		</div>
	);
};
