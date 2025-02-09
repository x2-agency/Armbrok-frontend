/* eslint-disable @next/next/no-img-element */
'use client';
import parser from 'html-react-parser';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import type { SliderSectionProps } from '@/widgets/slider-section/slider-section.types';

import css from './index.module.css';

export const Slider = ({
	slider,
}: {
	slider: SliderSectionProps['slider'];
}) => {
	return (
		<Swiper
			effect="coverflow"
			slidesPerView="auto"
			className={css.swiper}
			centeredSlides={true}
			spaceBetween={50}
			slideToClickedSlide
			slideActiveClass={css.activeSlide}
			setWrapperSize={false}
			coverflowEffect={{
				slideShadows: false,
				depth: 100,
				scale: 1,
				rotate: 0,
			}}
			modules={[EffectCoverflow, Navigation, Pagination]}
		>
			{slider.map((value, index) => (
				<SwiperSlide key={index} className={css.slide}>
					<img src={value.image} alt="image" className={css.image} />
					<h4 className={css.title}>{parser(value.title)}</h4>
					<p className={css.description}>{parser(value.description)}</p>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
