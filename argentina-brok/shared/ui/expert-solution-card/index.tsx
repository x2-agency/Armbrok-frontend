/* eslint-disable @next/next/no-img-element */

import cx from 'clsx';
import parser from 'html-react-parser';

import css from './index.module.css';

export type ExpertSolutionCardProps = {
	icon: string;
	title: string;
	description: string;
	className?: string;
	withShell?: boolean;
	backgroundColor?: 'white' | 'gray';
};

export const ExpertSolutionCard = ({
	icon,
	title,
	description,
	className,
	withShell,
	backgroundColor,
}: ExpertSolutionCardProps) => {
	const cardBackgroundColor = withShell
		? backgroundColor === 'white'
			? css.whiteBackground
			: css.grayBackground
		: '';

	return (
		<article
			className={cx(css.card, className, cardBackgroundColor, {
				[css.withShell]: withShell,
			})}
		>
			<img src={icon} alt="icon" className={css.icon} />
			<h4 className={css.title}>{parser(title)}</h4>
			<p className={css.description}>{parser(description)}</p>
		</article>
	);
};
