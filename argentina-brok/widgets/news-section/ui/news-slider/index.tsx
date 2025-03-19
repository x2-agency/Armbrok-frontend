import cx from 'clsx';
import { usePathname } from 'next/navigation';
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
	const pathname = usePathname();
	const isHyLocale = pathname.startsWith('/hy');
	const isRuLocale = pathname.startsWith('/ru');

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
					<NewsCard
						className={cx(
							css.card,
							{ [css.hyCard]: isHyLocale },
							{ [css.ruCard]: isRuLocale }
						)}
						key={index}
						data={news}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default NewsSlider;
