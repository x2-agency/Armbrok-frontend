import cx from 'clsx';
import parser from 'html-react-parser';

import type { Factoid } from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';
import { ExpertSolutionCard } from '@/shared/ui/expert-solution-card';

import css from './index.module.css';

export type ExpertSolutionSectionProps = {
	className?: string;
	title?: string;
	items?: Array<Factoid>;
	withShell?: boolean;
	backgroundColor?: 'white' | 'gray';
};

export const ExpertSolutionSection = ({
	className,
	title,
	items,
	withShell,
	backgroundColor,
}: ExpertSolutionSectionProps) => {
	if (!items) {
		return null;
	}

	const cardBackgroundColor = withShell
		? backgroundColor === 'white'
			? css.whiteBackground
			: css.grayBackground
		: '';

	return (
		<Container className={cx(css.root, className)}>
			{title && <h2 className={css.sectionTitle}>{parser(title ?? '')}</h2>}
			<div
				className={cx(css.cards, {
					[css.withShell]: withShell,
				})}
			>
				{items.map((item, key) => (
					<ExpertSolutionCard
						key={key}
						className={cx(css.card, cardBackgroundColor, {
							[css.withShell]: withShell,
						})}
						withShell={withShell}
						backgroundColor={backgroundColor}
						id={item.id}
						icon={item.icon}
						title={item.title}
						description={item.description}
						media={item.media}
					/>
				))}
			</div>
		</Container>
	);
};
