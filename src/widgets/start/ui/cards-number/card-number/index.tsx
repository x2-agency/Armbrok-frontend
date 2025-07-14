import parser from 'html-react-parser';

import type { StepsType } from '@/view/home/types/response';

import css from './index.module.css';

export type CardNumberProps = {
	data: StepsType;
	totalLength: number;
	index: number;
};

export const CardNumber = ({ data, totalLength, index }: CardNumberProps) => {
	const { title, description, step } = data;
	let wrapClass = css.wrapNumber;

	if (index === 0) {
		wrapClass = `${css.wrapNumber} ${css.first}`;
	} else if (index === totalLength - 1) {
		wrapClass = `${css.wrapNumber} ${css.last}`;
	} else {
		wrapClass = `${css.wrapNumber} ${css.middle}`;
	}

	return (
		<article className={css.root}>
			<div className={wrapClass}>
				<h4 className={css.number}>{step}</h4>
			</div>
			<h4 className={css.title}>{title}</h4>
			<p className={css.description}>{parser(description ?? '')}</p>
		</article>
	);
};
