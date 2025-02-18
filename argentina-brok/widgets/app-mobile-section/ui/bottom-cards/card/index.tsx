/* eslint-disable @next/next/no-img-element */
import cx from 'clsx';
import parser from 'html-react-parser';

import type { ImageFormat } from '@/shared/types/global.types';

import css from './index.module.css';

export type CardType = {
	title: string;
	description: string;
	mediaContent: ImageFormat;
};

export const Card = ({ title, description, mediaContent }: CardType) => {
	return (
		<article className={cx(css.root, 'hybrid')}>
			<h4 className={css.title}>{title}</h4>
			<p className={css.description}>{parser(description)}</p>
			<div className={css.imageWrap}>
				<img className={css.image} src={mediaContent.url} alt="image" />
			</div>
		</article>
	);
};
