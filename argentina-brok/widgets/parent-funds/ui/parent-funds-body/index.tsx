import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FundsCard } from '@/entities/fund-card';
import type { ParentFundProps } from '@/shared/types/global.types';
import type { ParentFundsMode } from '@/widgets/parent-funds';

import css from './index.module.css';

type ParentFundsBodyProps = {
	funds: Array<ParentFundProps>;
	mode: ParentFundsMode;
};

export const ParentFundsBody = ({ funds, mode }: ParentFundsBodyProps) => {
	if (mode === 'slider') {
		return (
			<div className={css.wrapper}>
				<Swiper
					className={css.slider}
					modules={[Navigation, Pagination]}
					navigation
					pagination
					slidesPerView={1}
					spaceBetween={24}
					breakpoints={{ 768: { slidesPerView: 2.11 } }}
				>
					{funds.map((fund, index) => (
						<SwiperSlide key={index} className={css.slide}>
							<FundsCard {...fund} mode={mode} className={css.fundCart} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		);
	}

	return (
		<ul className={css.list}>
			{funds.map((fund, index) => (
				<li key={index} className={css.paragraph}>
					<FundsCard {...fund} />
				</li>
			))}
		</ul>
	);
};
