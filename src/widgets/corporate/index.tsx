import parser from 'html-react-parser';

import { Container } from '@/shared/ui/container';
import type { FinancialSolutionsSectionProps } from '@/view/home/types/response';

import css from './index.module.css';
import { Cards } from './ui/cards';

export type Corporate = {
	cards?: FinancialSolutionsSectionProps;
};

export const Corporate = ({ cards }: Corporate) => {
	const { title, description, instruments } = cards ?? {};

	if (!instruments) {
		return null;
	}

	return (
		<Container className={css.root}>
			<div className={css.wrap}>
				<h2 className={css.title}>{parser(title ?? '')}</h2>
				{description && (
					<p className={css.description}>{parser(description)}</p>
				)}
			</div>
			<Cards instruments={instruments} />
		</Container>
	);
};
