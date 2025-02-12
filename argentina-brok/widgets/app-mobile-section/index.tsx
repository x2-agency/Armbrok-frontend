import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import type { BottomCardsProps } from './ui/bottom-cards';
import { BottomCards } from './ui/bottom-cards';
import type { TopCardsProps } from './ui/top-cards';
import { TopCards } from './ui/top-cards';

export type AppMobileSectionProps = {
	topCards: TopCardsProps;
	bottomCards: BottomCardsProps;
	title: string;
	description: string;
};

export const AppMobileSection = ({
	topCards,
	bottomCards,
	title,
	description,
}: AppMobileSectionProps) => {
	return (
		<Container className={css.root}>
			<h2 className={css.title}>{title}</h2>
			<p className={css.description}>{description}</p>
			<TopCards cards={topCards.cards} />
			<BottomCards cards={bottomCards.cards} />
		</Container>
	);
};
