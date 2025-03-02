/* eslint-disable @next/next/no-img-element */
'use client';

import cx from 'clsx';
import parser from 'html-react-parser';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { SliderSectionProps } from '@/widgets/slider-section/slider-section.types';

import css from './index.module.css';

export const Slider = ({
	slider,
}: {
	slider: SliderSectionProps['slider'];
}) => {
	if (!slider) {
		return null;
	}

	return (
		<Swiper
			effect="coverflow"
			slidesPerView="auto"
			className={cx(css.swiper, {
				[css.withSummary]: Array.isArray(slider),
				[css.withoutSummary]: slider.files,
			})}
			centeredSlides={true}
			spaceBetween={50}
			slideToClickedSlide
			slideActiveClass={css.activeSlide}
			setWrapperSize={false}
			initialSlide={1}
			coverflowEffect={{
				slideShadows: false,
				depth: 100,
				scale: 1,
				rotate: 0,
			}}
			modules={[EffectCoverflow, Navigation, Pagination]}
			pagination={{
				clickable: true,
			}}
			navigation={true}
		>
			{slider.files &&
				slider?.files.map((value, index) => (
					<SwiperSlide key={index} className={css.slide}>
						<div className={css.imageWrapper}>
							<img src={value.url} alt="image" className={css.image} />
						</div>
					</SwiperSlide>
				))}
			{Array.isArray(slider) &&
				slider?.map((value, index) => (
					<SwiperSlide key={index} className={css.slide}>
						<div className={css.imageWrapper}>
							<img src={value.media?.url} alt="image" className={css.image} />
						</div>
						{value.title && (
							<h4 className={css.title}>{parser(value.title)}</h4>
						)}
						{value.caption && (
							<p className={css.description}>{parser(value.caption)}</p>
						)}
					</SwiperSlide>
				))}
		</Swiper>
	);
};
