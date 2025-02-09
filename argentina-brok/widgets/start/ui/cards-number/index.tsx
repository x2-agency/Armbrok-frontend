import type { CardType } from '@/widgets/start/types';

import { CardNumber } from './card-number';
import css from './index.module.css';

type CardsNumberProps = {
	cardsNumber: Array<CardType>;
};

export const CardsNumber = ({ cardsNumber }: CardsNumberProps) => {
	return (
		<div className={css.root}>
			{cardsNumber.map((card, index) => (
				<CardNumber
					index={index}
					key={index}
					number={card.number}
					title={card.title}
					description={card.description}
					totalLength={cardsNumber.length}
				/>
			))}
		</div>
	);
};
