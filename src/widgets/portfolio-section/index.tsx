import parser from 'html-react-parser';

import { Container } from '@/shared/ui/container';
import type { PortfolioSectionType } from '@/view/brokerage/types/response';

import css from './index.module.css';
import { BottomCards } from './ui/bottom-cards';

export type PortfolioSectionProps = {
	cards: Array<PortfolioSectionType>;
	caption?: string;
};

export const PortfolioSection = ({ cards, caption }: PortfolioSectionProps) => {
	return (
		<Container className={css.root}>
			<BottomCards cards={cards} />
			<h3 className={css.caption}>{parser(caption ?? '')}</h3>
		</Container>
	);
};
