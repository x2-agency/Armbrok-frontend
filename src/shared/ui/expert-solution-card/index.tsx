/* eslint-disable @next/next/no-img-element */
import cx from 'clsx';
import parser from 'html-react-parser';

import type { Factoid } from '@/shared/types/global.types';

import css from './index.module.css';

export type ExpertSolutionCardProps = Factoid & {
	className?: string;
	withShell?: boolean;
	backgroundColor?: 'white' | 'gray';
	centered?: boolean;
	bigFormatIcon?: boolean;
};

export const ExpertSolutionCard = ({
	icon,
	title,
	description,
	className,
	withShell,
	backgroundColor,
	media,
	centered,
	bigFormatIcon,
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
				['p-32']: withShell,
				[css.centered]: centered,
				[css.bigIcon]: bigFormatIcon,
			})}
		>
			{media?.url && <img src={media?.url} className={css.icon} />}
			{icon?.url && <img src={icon?.url} className={css.icon} />}
			{title && <h4 className={css.title}>{parser(title)}</h4>}
			{description && <p className={css.description}>{parser(description)}</p>}
		</article>
	);
};
