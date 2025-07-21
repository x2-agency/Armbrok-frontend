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

	const defineColor = (value: number) => {
		if (value > 0) {
			return 'green';
		}

		if (value < 0) {
			return 'red';
		}

		return undefined;
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
								className={cx(css.tbodyValue, css[defineColor(value) ?? ''])}
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
