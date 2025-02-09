/* eslint-disable @next/next/no-img-element */
'use client';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { SliderSectionProps } from '@/widgets/slider-section/slider-section.types';

import css from './index.module.css';

export const Slider = ({
	slider,
}: {
	slider: SliderSectionProps['slider'];
}) => {
	return (
		<Swiper
			slidesPerView="auto"
			className={css.swiper}
			centeredSlides={true}
			spaceBetween={50}
			slideToClickedSlide
			setWrapperSize={false}
		>
			{slider.map((value, index) => (
				<SwiperSlide key={index} className={css.slide}>
					<img src={value.image} alt="image" className={css.image} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};
