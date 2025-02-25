import { Container } from '@/shared/ui/container';
import type { PortfolioSectionType } from '@/view/brokerage/types/response';

import css from './index.module.css';
import { BottomCards } from './ui/bottom-cards';

export type PortfolioSectionProps = {
	cards: Array<PortfolioSectionType>;
};

export const PortfolioSection = ({ cards }: PortfolioSectionProps) => {
	return (
		<Container className={css.root}>
			<BottomCards cards={cards} />
		</Container>
	);
};
