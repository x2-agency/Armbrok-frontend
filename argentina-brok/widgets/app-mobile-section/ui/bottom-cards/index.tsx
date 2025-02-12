import type { CardType } from './card';
import { Card } from './card';
import css from './index.module.css';

export type BottomCardsProps = {
	cards: Array<CardType>;
};

export const BottomCards = ({ cards }: BottomCardsProps) => {
	return (
		<div className={css.root}>
			{cards.map((card, index) => (
				<Card
					key={index}
					mediaContent={card.mediaContent}
					title={card.title}
					description={card.description}
				/>
			))}
		</div>
	);
};
