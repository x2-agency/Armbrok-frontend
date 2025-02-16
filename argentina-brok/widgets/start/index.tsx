import type { InvestingStepsSection } from '@/shared/types/global.types';
import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import { CardsNumber } from './ui/cards-number';

export const Start = ({ title, button, steps }: InvestingStepsSection) => {
	if (!steps) {
		return null;
	}

	return (
		<Container className={css.root}>
			{title && <h2 className={css.title}>{title}</h2>}

			<CardsNumber steps={steps} />
			{button && (
				<Button category="big" href={button.link} variant="filled">
					{button.text}
				</Button>
			)}
		</Container>
	);
};
