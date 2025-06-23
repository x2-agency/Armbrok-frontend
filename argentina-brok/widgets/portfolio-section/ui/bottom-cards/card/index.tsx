/* eslint-disable @next/next/no-img-element */
import cx from 'clsx';
import parser from 'html-react-parser';

import type { PortfolioSectionType } from '@/view/brokerage/types/response';

import css from './index.module.css';

export type CardType = {
	data: PortfolioSectionType;
	className?: string;
};

export const Card = ({ data, className }: CardType) => {
	return (
		<article className={cx(css.root, 'hybrid', className)}>
			<h4 className={css.title}>{parser(data.title ?? '')}</h4>
			<p className={css.description}>{parser(data.description ?? '')}</p>
			<div className={css.imageWrap}>
				<img
					className={css.image}
					src={data.mediaContent?.url ?? ''}
					loading="lazy"
				/>
			</div>
		</article>
	);
};
