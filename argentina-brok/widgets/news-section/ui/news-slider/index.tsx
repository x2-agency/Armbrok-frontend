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
	const sortedNewsSlider = newsSlider.sort((a, b) => {
		const dateA = new Date(a.publishDate).getTime();
		const dateB = new Date(b.publishDate).getTime();
		return dateB - dateA;
	});

	return (
		<Swiper
			grabCursor
			className={cx(css.root, className)}
			slidesPerView={3}
			navigation
			spaceBetween={24}
			pagination={{ clickable: true }}
			modules={[Navigation, Pagination]}
			resizeObserver
			onResize={swiper => swiper.update()}
			breakpoints={{
				320: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2.985,
				},
			}}
		>
			{sortedNewsSlider?.map((news, index) => (
				<SwiperSlide key={news.slug} className={css.sliderItem}>
					<NewsCard className={cx(css.card)} key={index} data={news} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default NewsSlider;
