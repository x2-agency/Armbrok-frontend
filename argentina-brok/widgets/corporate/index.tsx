import parser from 'html-react-parser';

import type { FinancialSolutionsSection } from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import { Cards } from './ui/cards';

export const Corporate = ({
	title,
	instruments,
	description,
}: FinancialSolutionsSection) => {
	if (!instruments) {
		return null;
	}

	return (
		<Container className={css.root}>
			<div className={css.wrap}>
				<h2 className={css.title}>{title}</h2>
				{description && (
					<p className={css.description}>{parser(description)}</p>
				)}
			</div>
			<Cards instruments={instruments} />
		</Container>
	);
};
