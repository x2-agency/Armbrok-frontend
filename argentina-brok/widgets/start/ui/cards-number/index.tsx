'use client';

import type { StepsType } from '@/view/home/types/response';

import { CardNumber } from './card-number';
import css from './index.module.css';

type CardsNumberProps = {
	steps: Array<StepsType>;
};

export const CardsNumber = ({ steps }: CardsNumberProps) => {
	return (
		<div className={css.root}>
			{steps.map((card, index) => (
				<CardNumber
					key={index}
					index={index}
					data={card}
					totalLength={steps.length}
				/>
			))}
		</div>
	);
};
