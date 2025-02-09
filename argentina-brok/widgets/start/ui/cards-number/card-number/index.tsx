import parser from 'html-react-parser';

import css from './index.module.css';

export const CardNumber = ({
	number,
	title,
	description,
	index,
	totalLength,
}: {
	number: string;
	title: string;
	description: string;
	index: number;
	totalLength: number;
}) => {
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
				<h4 className={css.number}>{number}</h4>
			</div>
			<h4 className={css.title}>{title}</h4>
			<p className={css.description}>{parser(description)}</p>
		</article>
	);
};
