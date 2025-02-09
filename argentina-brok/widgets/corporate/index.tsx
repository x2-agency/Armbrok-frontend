import parser from 'html-react-parser';

import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import type { CardType } from './model/corporate';
import { Cards } from './ui/cards';

export const Corporate = ({
	title,
	description,
	cards,
}: {
	title: string;
	description: string;
	cards: Array<CardType>;
}) => {
	return (
		<Container category="section" padding="default" className={css.root}>
			<div className={css.wrap}>
				<h2 className={css.title}>{title}</h2>
				<p className={css.description}>{parser(description)}</p>
			</div>
			<Cards cards={cards} />
		</Container>
	);
};
