import type { CardType } from '@/widgets/corporate/model/corporate';

import { Card } from './card';
import css from './index.module.css';

type CardsProps = {
	cards: Array<CardType>;
};

export const Cards = ({ cards }: CardsProps) => {
	return (
		<div className={css.root}>
			{cards.map((card, index) => (
				<Card
					href={card.href}
					key={index}
					icon={card.icon}
					description={card.description}
				/>
			))}
		</div>
	);
};
