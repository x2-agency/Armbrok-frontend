import cx from 'clsx';

import type { ProfitTableItemProps } from '@/shared/types/global.types';

import css from './index.module.css';

type ProfitTableProps = {
	table: Array<ProfitTableItemProps>;
};

export const ProfitTable = ({ table }: ProfitTableProps) => {
	const keys: Array<string> = table.map(item => Object.keys(item)[0]);
	const values: Array<number> = table.map(item =>
		parseFloat(Object.values(item)[0].replace(',', '.'))
	);
	const maxValue = Math.max(...values.slice(0, -1));
	const minValue = Math.min(...values.slice(0, -1));

	const defineColor = (value: number, key: number) => {
		if (key === values.length - 1) {
			return value !== 0 ? (value > 0 ? 'green' : 'red') : undefined;
		}

		if (value === maxValue) {
			return 'green';
		}

		if (value === minValue) {
			return 'red';
		}
	};

	return (
		<table className={css.root}>
			<thead className={css.thead}>
				<tr className={cx(css.row, css.headRow)}>
					{keys.map((value, key) => (
						<th key={key} className={css.theadValue}>
							<span className={css.value}>{value}</span>
						</th>
					))}
				</tr>
			</thead>
			<tbody className={css.tbody}>
				<tr className={css.row}>
					{values.map((value, key) => (
						<td
							key={key}
							className={cx(css.tbodyValue, css[defineColor(value, key) ?? ''])}
						>
							<span className={css.value}>{value}%</span>
						</td>
					))}
				</tr>
			</tbody>
		</table>
	);
};
