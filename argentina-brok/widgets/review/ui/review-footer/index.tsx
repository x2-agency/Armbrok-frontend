import parser from 'html-react-parser';

import type { ReviewFooterProps } from '@/widgets/review/review.types';

import css from './index.module.css';

export const ReviewFooter = ({ member, experience }: ReviewFooterProps) => {
	return (
		<footer className={css.root}>
			<h4 className={css.fullName}>{parser(member.fullName)}</h4>
			<p className={css.position}>{parser(member.position)}</p>
			<p className={css.experience}>{parser(experience)}</p>
		</footer>
	);
};
