'use client';

import cx from 'clsx';
import parser from 'html-react-parser';
import { useRef, useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperClass } from 'swiper/react';

import { Container } from '@/shared/ui/container';

import type { AwardSectionProps } from './awards.types';
import css from './index.module.css';
import { AwardItem } from './ui/award-item';

export const AwardsSection = ({
	title,
	awards,
	className,
}: AwardSectionProps) => {
	const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
		null
	);
	const [isBeginning, setIsBeginning] = useState(true);
	const [isEnd, setIsEnd] = useState(false);

	if (!awards || awards.length === 0) {
		return null;
	}

	const handleSlideChange = (swiper: SwiperClass) => {
		setIsBeginning(swiper.isBeginning);
		setIsEnd(swiper.isEnd);
	};

	return (
		<Container fullWidth className={cx(css.root, className)}>
			{title && <h2 className={css.title}>{parser(title ?? '')}</h2>}
			<Swiper
				grabCursor
				className={css.slider}
				slidesPerView={4}
				spaceBetween={24}
				pagination={{ clickable: true }}
				modules={[Navigation, Pagination]}
				resizeObserver
				onSwiper={swiper => {
					setSwiperInstance(swiper);
					handleSlideChange(swiper);
				}}
				onSlideChange={handleSlideChange}
				onResize={swiper => swiper.update()}
				centeredSlides={false}
				breakpoints={{
					320: {
						slidesPerView: 1.2,
						centeredSlides: true,
					},
					768: {
						slidesPerView: 4,
						centeredSlides: false,
					},
				}}
			>
				{awards.map((award, index) => (
					<SwiperSlide key={award.id ?? index} className={css.slide}>
						<AwardItem {...award} />
					</SwiperSlide>
				))}
			</Swiper>
			<div className={css.navigation}>
				<button
					className={cx(css.navBtn, css.navBtnPrev, {
						[css.navBtnDisabled]: isBeginning,
					})}
					aria-label="Previous"
					onClick={() => swiperInstance?.slidePrev()}
				/>
				<button
					className={cx(css.navBtn, css.navBtnNext, {
						[css.navBtnDisabled]: isEnd,
					})}
					aria-label="Next"
					onClick={() => swiperInstance?.slideNext()}
				/>
			</div>
		</Container>
	);
};
