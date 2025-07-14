import cx from 'clsx';

import type { ProfitTableItemProps } from '@/shared/types/global.types';

import css from './index.module.css';

type ProfitTableProps = {
	table: Array<ProfitTableItemProps>;
};

export const ProfitTable = ({ table }: ProfitTableProps) => {
	if (!(table && table.length)) {
		return null;
	}

	const keys: Array<string> = table.map(item => Object.keys(item)[0]);
	const values: Array<number> = table.map(item => {
		try {
			if (!item || typeof item !== 'object') return 0;

			const itemValues = Object.values(item);
			if (itemValues.length === 0) return 0;

			const value = itemValues[0];
			if (value === null || value === undefined) return 0;

			const stringValue = String(value).replace(',', '.').replace(/-/g, '0');

			const cleanedValue = stringValue.replace(/[^\d.-]/g, '');

			const parsed = parseFloat(cleanedValue);
			return isNaN(parsed) ? 0 : parsed;
		} catch (error) {
			console.error('Error parsing value:', error);
			return 0;
		}
	});
	const filtered = values.slice(0, -1).filter(v => v !== 0);

	const maxValue = filtered.length ? Math.max(...filtered) : 0;
	const minValue = filtered.length ? Math.min(...filtered) : 0;

	const defineColor = (value: number, key: number) => {
		if (key === values.length - 1) {
			return value !== 0 ? (value > 0 ? 'green' : 'red') : '';
		}

		if (value === maxValue) {
			return 'green';
		}

		if (value === minValue) {
			return 'red';
		}
	};

	return (
		<div className={css.root}>
			<table className={css.table}>
				<thead className={css.thead}>
					<tr
						className={cx(css.row, css.headRow)}
						style={{ gridTemplateColumns: `repeat(${keys.length}, 1fr)` }}
					>
						{keys.map((value, key) => (
							<th key={key} className={css.theadValue}>
								<span className={css.value}>{value}</span>
							</th>
						))}
					</tr>
				</thead>
				<tbody className={css.tbody}>
					<tr
						className={css.row}
						style={{ gridTemplateColumns: `repeat(${keys.length}, 1fr)` }}
					>
						{values.map((value, key) => (
							<td
								key={key}
								className={cx(
									css.tbodyValue,
									css[defineColor(value, key) ?? '']
								)}
							>
								<span className={css.value}>
									{value > 0 && '+'}
									{value}%
								</span>
							</td>
						))}
					</tr>
				</tbody>
			</table>
		</div>
	);
};
