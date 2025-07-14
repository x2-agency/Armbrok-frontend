import cx from 'clsx';
import parser from 'html-react-parser';

import type { EventItemType } from '@/shared/types/global.types';

import css from './index.module.css';

export const Event = ({
	year,
	description,
	className,
}: EventItemType & { className?: string }) => {
	return (
		<div className={cx(css.root, className)}>
			<h6 className={css.date}>{year}</h6>
			<div className={css.lineWrap}>
				<span className={cx(css.ball)} />
				<span className={css.line} />
			</div>
			{description && <p className={css.description}>{parser(description)}</p>}
		</div>
	);
};
