import parser from 'html-react-parser';

import type { ReviewHeadProps } from '@/widgets/review/review.types';

import css from './index.module.css';

export const ReviewHead = ({ title, review }: ReviewHeadProps) => {
	return (
		<header className={css.root}>
			<h2 className={css.title}>{parser(title)}</h2>
			<p className={css.text}>{parser(review)}</p>
		</header>
	);
};
