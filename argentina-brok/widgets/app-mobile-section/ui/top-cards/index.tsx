import type { TopCardType } from './card';
import { Card } from './card';
import css from './index.module.css';

export type TopCardsProps = {
	cards: Array<TopCardType>;
};

export const TopCards = ({ cards }: TopCardsProps) => {
	return (
		<div className={css.root}>
			{cards.map((card, index) => (
				<Card
					key={index}
					title={card.title}
					description={card.description}
					mediaContent={card.mediaContent}
					showLink={index === 0}
				/>
			))}
		</div>
	);
};
