/* eslint-disable @next/next/no-img-element */
import cx from 'clsx';

import type { QuoteSection } from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import { ReviewFooter } from './ui/review-footer';
import { ReviewHead } from './ui/review-head';

type ReviewProps = {
	quote?: QuoteSection;
	className?: string;
};

export const Review = ({ quote, className }: ReviewProps) => {
	if (!quote) {
		return null;
	}

	return (
		<Container className={cx(css.root, className)}>
			<article className={css.card}>
				<img
					src={quote.authorPhoto?.url}
					alt="company member"
					className={css.image}
				/>
				<div className={css.review}>
					<ReviewHead review={quote.content} />
					<ReviewFooter
						fullName={quote.authorFullName}
						position={quote.authorPosition}
						experience={quote.authorExtraInfo}
					/>
				</div>
			</article>
		</Container>
	);
};
