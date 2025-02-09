/* eslint-disable @next/next/no-img-element */
import cx from 'clsx';

import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import type { ReviewProps } from './review.types';
import { ReviewFooter } from './ui/review-footer';
import { ReviewHead } from './ui/review-head';

export const Review = ({
	image,
	reviewHead,
	reviewFooter,
	className,
}: ReviewProps) => {
	return (
		<Container className={cx(css.root, className)}>
			<article className={css.card}>
				<img src={image} alt="company member" className={css.image} />
				<div className={css.review}>
					<ReviewHead review={reviewHead.review} />
					<ReviewFooter
						member={reviewFooter.member}
						experience={reviewFooter.experience}
					/>
				</div>
			</article>
		</Container>
	);
};
