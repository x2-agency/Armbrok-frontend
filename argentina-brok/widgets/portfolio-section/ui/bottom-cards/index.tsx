import type { PortfolioSectionType } from '@/view/brokerage/types/response';

import { Card } from './card';
import css from './index.module.css';

export type BottomCardsProps = {
	cards: Array<PortfolioSectionType>;
};

export const BottomCards = ({ cards }: BottomCardsProps) => {
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
