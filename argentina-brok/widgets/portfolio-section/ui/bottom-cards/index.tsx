'use client';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import useMediaQuery from '@/shared/hooks/use-media-query';
import type { PortfolioSectionType } from '@/view/brokerage/types/response';

import { Card } from './card';
import css from './index.module.css';

export type BottomCardsProps = {
	cards: Array<PortfolioSectionType>;
};

export const BottomCards = ({ cards }: BottomCardsProps) => {
	const isMobile = useMediaQuery('(max-width: 767px)');

	if (isMobile) {
		return (
			<div className={css.sliderWrapper}>
				<Swiper
					pagination
					modules={[Pagination]}
					spaceBetween={20}
					centeredSlides
					autoHeight={false} 
					slidesPerView={1}
					style={{ height: '100%' }} 
					className={css.swiper}
				>
					{cards.map(card => (
						<SwiperSlide key={card.id} className={css.slide}>
							<Card
								className={css.card}
								data={{
									title: card?.title,
									description: card?.description,
									mediaContent: card?.mediaContent,
								}}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		);
	}

	return (
		<div className={css.root}>
			{cards.map(card => (
				<Card
					key={card.id}
					data={{
						title: card?.title,
						description: card?.description,
						mediaContent: card?.mediaContent,
					}}
				/>
			))}
		</div>
	);
};
