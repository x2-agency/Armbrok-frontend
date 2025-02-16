import cx from 'clsx';

import type { EventItemType } from '@/shared/types/global.types';
import { Event } from '@/widgets/corporate-events/ui/event';

import css from './index.module.css';

export type EventsPops = {
	events: Array<EventItemType>;
	className?: string;
};

export const Events = ({ events, className }: EventsPops) => {
	return (
		<div className={cx(css.root, className)}>
			{events.map((event, index) => (
				<Event
					className={cx(css.event, { [css.firstEvent]: index === 0 })}
					key={index}
					year={event.year}
					description={event.description}
				/>
			))}
		</div>
	);
};
