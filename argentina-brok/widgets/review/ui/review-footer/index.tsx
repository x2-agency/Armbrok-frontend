import parser from 'html-react-parser';

import type { ReviewFooterProps } from '@/widgets/review/review.types';

import css from './index.module.css';

export const ReviewFooter = ({
	fullName,
	position,
	experience,
}: ReviewFooterProps) => {
	return (
		<footer className={css.root}>
			<h4 className={css.fullName}>{parser(fullName)}</h4>
			<p className={css.position}>{parser(position)}</p>
			{experience && <p className={css.experience}>{parser(experience)}</p>}
		</footer>
	);
};
