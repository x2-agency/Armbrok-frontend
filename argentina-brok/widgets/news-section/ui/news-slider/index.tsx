import cx from 'clsx';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { NewsCard } from '@/entities/news-card';
import type { Article } from '@/shared/types/article';

import css from './index.module.css';

export type NewsSliderProps = {
	newsSlider: Array<Article>;
	className: string;
};

const NewsSlider: React.FC<NewsSliderProps> = ({ newsSlider, className }) => {
	return (
		<Swiper
			grabCursor
			className={cx(css.root, className)}
			slidesPerView={3}
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
					slidesPerView: 3,
				},
				1440: {
					slidesPerView: 3,
				},
			}}
		>
			{newsSlider?.map((news, index) => (
				<SwiperSlide key={news.slug} className={css.sliderItem}>
					<NewsCard className={css.card} key={index} data={news} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default NewsSlider;
