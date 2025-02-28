/* eslint-disable @next/next/no-img-element */
import cx from 'clsx';
import parser from 'html-react-parser';

import type { InstrumentType } from '@/view/home/types/response';

import css from './index.module.css';

export type CardType = {
	card: InstrumentType;
};

export const Card = ({ card }: CardType) => {
	const { title, media } = card;
	return (
		<article className={cx(css.root, 'p-32')}>
			{media?.url && (
				<img
					className={css.icon}
					src={media?.url}
					alt={media?.alternativeText}
				/>
			)}
			{title && <p className={css.description}>{parser(title)}</p>}
		</article>
	);
};
