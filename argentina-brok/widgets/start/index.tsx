import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import type { CardType } from './types';
import { CardsNumber } from './ui/cards-number';

export const Start = ({
	title,
	cardsNumber,
	button,
	href,
}: {
	title: string;
	cardsNumber: Array<CardType>;
	button: string;
	href: string;
}) => {
	return (
		<Container className={css.root}>
			<h2 className={css.title}>{title}</h2>
			<CardsNumber cardsNumber={cardsNumber} />
			<Button category="big" href={href} variant="filled">
				{button}
			</Button>
		</Container>
	);
};
