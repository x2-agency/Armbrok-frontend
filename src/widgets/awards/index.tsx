'use client';

import cx from 'clsx';
import parser from 'html-react-parser';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Container } from '@/shared/ui/container';

import type { AwardSectionProps } from './awards.types';
import css from './index.module.css';
import { AwardItem } from './ui/award-item';

export const AwardsSection = ({
	title,
	awards,
	className,
}: AwardSectionProps) => {
	if (!awards || awards.length === 0) {
		return null;
	}

	return (
		<Container className={cx(css.root, className)}>
			{title && <h2 className={css.title}>{parser(title ?? '')}</h2>}
			<Swiper
				grabCursor
				className={css.slider}
				slidesPerView={4}
				navigation
				spaceBetween={24}
				pagination={{ clickable: true }}
				modules={[Navigation, Pagination]}
				resizeObserver
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
		</Container>
	);
};
