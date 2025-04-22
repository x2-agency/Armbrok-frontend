import { Swiper } from 'swiper/react';

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
		return <Swiper className={css.slider}></Swiper>;
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
