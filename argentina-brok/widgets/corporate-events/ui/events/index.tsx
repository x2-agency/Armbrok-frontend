import cx from 'clsx';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { EventItemType } from '@/shared/types/global.types';
import { Event } from '@/widgets/corporate-events/ui/event';

import css from './index.module.css';

export type EventsPops = {
	events: Array<EventItemType>;
	className?: string;
};

export const Events = ({ events, className }: EventsPops) => {
	return (
		<Swiper
			grabCursor
			className={cx(css.root, className)}
			slidesPerView={4}
			navigation
			spaceBetween={0}
			pagination={{ clickable: true }}
			modules={[Navigation, Pagination]}
			resizeObserver
			onResize={swiper => swiper.update()}
			breakpoints={{
				320: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 4,
				},
				1441: {
					slidesPerView: 4.1,
				},
			}}
		>
			{events.map((event, index) => (
				<SwiperSlide key={index} className={css.sliderItem}>
					<Event
						className={cx(css.event, { [css.firstEvent]: index === 0 })}
						key={index}
						year={event.year}
						description={event.description}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
