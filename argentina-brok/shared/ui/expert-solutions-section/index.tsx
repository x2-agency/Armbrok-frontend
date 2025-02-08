/* eslint-disable @next/next/no-img-element */
import cx from 'clsx';
import parser from 'html-react-parser';

import { Container } from '@/shared/ui/container';

import css from './index.module.css';

export type ExpertSolutionSectionProps = {
	className?: string;
	title?: string;
	items: Array<{
		icon: string;
		title: string;
		description: string;
	}>;
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
	const cardBackgroundColor = withShell
		? backgroundColor === 'white'
			? css.whiteBackground
			: css.grayBackground
		: '';

	return (
		<Container className={cx(css.root, className)}>
			{title && <h2 className={css.sectionTitle}>{parser(title)}</h2>}
			<div className={css.cards}>
				{items.map((item, key) => (
					<article
						key={key}
						className={cx(css.card, cardBackgroundColor, {
							[css.withShell]: withShell,
						})}
					>
						<img src={item.icon} alt="icon" className={css.icon} />
						<h4 className={css.title}>{parser(item.title)}</h4>
						<p className={css.description}>{parser(item.description)}</p>
					</article>
				))}
			</div>
		</Container>
	);
};
