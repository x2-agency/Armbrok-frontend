import cx from 'clsx';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { EmployeeStoriesItem } from '@/shared/types/global.types';
import { EmployeeItem } from '@/widgets/our-people-section/ui/employee-item';

import css from './index.module.css';

export type EmployeeSliderProps = {
	employeeStories?: Array<EmployeeStoriesItem>;
	className?: string;
};

const EmployeeSlider: React.FC<EmployeeSliderProps> = ({
	employeeStories,
	className,
}) => {
	return (
		<Swiper
			grabCursor
			className={cx(css.root, className)}
			slidesPerView={2}
			navigation
			spaceBetween={30}
			pagination={{ clickable: true }}
			modules={[Navigation, Pagination]}
			resizeObserver
			onResize={swiper => swiper.update()}
			breakpoints={{
				320: {
					slidesPerView: 1,
				},
				1440: {
					slidesPerView: 2,
				},
			}}
		>
			{employeeStories?.map((value, index) => (
				<SwiperSlide key={index} className={css.sliderItem}>
					<EmployeeItem
						className={css.card}
						employee={value.employee}
						story={value.story}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default EmployeeSlider;
