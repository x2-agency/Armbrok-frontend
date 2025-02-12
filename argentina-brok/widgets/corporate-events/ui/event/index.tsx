import cx from 'clsx';
import parser from 'html-react-parser';

import css from './index.module.css';

export type EventType = {
	date: string;
	description: string;
	className?: string;
};

export const Event = ({ date, description, className }: EventType) => {
	return (
		<div className={cx(css.root, className)}>
			<h6 className={css.date}>{date}</h6>
			<div className={css.lineWrap}>
				<span className={cx(css.ball)} />
				<span className={css.line} />
			</div>
			<p className={css.description}>{parser(description)}</p>
		</div>
	);
};
