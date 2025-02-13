'use client';

import type { Factoid } from '@/shared/types/global.types';

import { CardNumber } from './card-number';
import css from './index.module.css';

type CardsNumberProps = {
	steps: Array<Factoid>;
};

export const CardsNumber = ({ steps }: CardsNumberProps) => {
	return (
		<div className={css.root}>
			{steps.map((card, index) => (
				<CardNumber
					index={index}
					key={index}
					number={(index + 1).toString()}
					title={card.title}
					description={card.description ?? ''}
					totalLength={steps.length}
				/>
			))}
		</div>
	);
};
