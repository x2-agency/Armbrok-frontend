import type { CardType } from './card';
import { Card } from './card';
import css from './index.module.css';

export type CardsProps = {
	instruments: Array<CardType>;
};

export const Cards = ({ instruments }: CardsProps) => {
	return (
		<div className={css.root}>
			{instruments?.map(card => (
				<Card id={card?.id} url={card?.url} text={card?.text} />
			))}
		</div>
	);
};
