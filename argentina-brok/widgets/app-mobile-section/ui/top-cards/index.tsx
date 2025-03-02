import type { CardType } from '@/view/brokerage/types/response';

import { Card } from './card';
import css from './index.module.css';

export type TopCardsProps = {
	cards: Array<CardType>;
};

export const TopCards = ({ cards }: TopCardsProps) => {
	if (!cards) {
		return null;
	}
	return (
		<div className={css.root}>
			{cards.map((card, index) => (
				<Card data={card} showLink={index === 0} key={index} />
			))}
		</div>
	);
};
