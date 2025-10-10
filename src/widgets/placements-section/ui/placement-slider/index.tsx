import cx from 'clsx';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { SecurityPaperItem } from '@/shared/types/global.types';
import { PlacementItem } from '@/widgets/placements-section/ui/placement-item';

import css from './index.module.css';

export type PlacementSliderProps = {
	items?: Array<SecurityPaperItem>;
	className?: string;
};

const PlacementSlider: React.FC<PlacementSliderProps> = ({
	items,
	className,
}) => {
	return (
		<Swiper
			grabCursor
			className={cx(css.root, className)}
			slidesPerView={1.2}
			navigation
			spaceBetween={24}
			pagination={{ clickable: true }}
			modules={[Navigation, Pagination]}
			resizeObserver
			onResize={swiper => swiper.update()}
			breakpoints={{
				320: {
					slidesPerView: 1.11,
				},

				1440: {
					slidesPerView: 1.2,
				},
			}}
		>
			{items?.map((value, index) => (
				<SwiperSlide key={index} className={css.sliderItem}>
					<PlacementItem className={css.card} {...value} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default PlacementSlider;
