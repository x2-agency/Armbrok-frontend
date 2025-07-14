import cx from 'clsx';
import parser from 'html-react-parser';

import FigureSVG from '@/public/assets/images/review/figure.svg';
import type { ReviewHeadProps } from '@/widgets/review/review.types';

import css from './index.module.css';

export const ReviewHead = ({ review }: ReviewHeadProps) => {
	return (
		<header className={css.root}>
			<FigureSVG className={css.figure} />
			<p className={css.text}>{parser(review)}</p>
			<FigureSVG className={cx(css.figure, css.rotated)} />
		</header>
	);
};
