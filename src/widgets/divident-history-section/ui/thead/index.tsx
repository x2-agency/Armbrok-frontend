import cx from 'clsx';

import css from './index.module.css';

export type TheadType = {
	id?: number;
	value?: string;
};

export type THeadProps = {
	list: Array<TheadType>;
};

export const Thead = ({ list }: THeadProps) => {
	return (
		<thead className={css.thead}>
			<tr className={cx(css.row, css.headRow)}>
				{list.map(item => (
					<th key={item.id} className={css.theadValue}>
						<span className={css.value}>{item.value}</span>
					</th>
				))}
			</tr>
		</thead>
	);
};
