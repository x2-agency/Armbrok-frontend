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
	gridClass?: string;
};

export const ExpertSolutionSection = ({
	className,
	title,
	items,
	withShell,
	backgroundColor,
	gridClass,
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
		<Container category="div" className={cx(css.root, className)}>
			{title && <h2 className={css.sectionTitle}>{parser(title ?? '')}</h2>}
			{items.length === 5 ? (
				<div className={css.flexCards}>
					<ul className={css.firstList}>
						{items.slice(0, 3).map((item, index) => (
							<li key={index} className={css.listElement}>
								<ExpertSolutionCard
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
							</li>
						))}
					</ul>
					<ul className={css.secondList}>
						{items.slice(3).map((item, index) => (
							<li key={index} className={css.listElement}>
								<ExpertSolutionCard
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
							</li>
						))}
					</ul>
				</div>
			) : (
				<ul
					className={cx(css.cards, gridClass, {
						[css.withShell]: withShell,
					})}
				>
					{items.map((item, key) => (
						<li key={key}>
							<ExpertSolutionCard
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
						</li>
					))}
				</ul>
			)}
		</Container>
	);
};
