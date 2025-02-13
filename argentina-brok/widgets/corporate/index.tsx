import parser from 'html-react-parser';

import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import type { CardsProps } from './ui/cards';
import { Cards } from './ui/cards';
import type { CardType } from './ui/cards/card';

type Corporate = {
	title: string;
	description: string;
	cards: CardsProps;
};

export const Corporate = ({
	title,
	description,
	instruments,
}: {
	title: string;
	description: string;
	instruments: Array<CardType>;
}) => {
	console.log(instruments);
	return (
		<Container category="section" className={css.root}>
			<div className={css.wrap}>
				<h2 className={css.title}>{title}</h2>
				<p className={css.description}>{parser(description)}</p>
			</div>
			<Cards instruments={instruments} />
		</Container>
	);
};
