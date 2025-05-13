'use client';

import cx from 'clsx';
import parser from 'html-react-parser';

import type { HeatMapItemProps } from '@/shared/types/global.types';

import { transformHeatMapData } from './helpers/transform-heat-map-data';
import css from './index.module.css';
import { CellValue } from './ui/cell-value';

type HeatMapProps = {
	heatMap: Array<HeatMapItemProps>;
	className?: string;
	opened?: boolean;
};

export const HeatMap = ({
	heatMap,
	className,
	opened = true,
}: HeatMapProps) => {
	if (!(heatMap && heatMap.length)) {
		return null;
	}
	const { headers, rows } = transformHeatMapData(heatMap);

	return (
		<div className={cx(css.root, className, { [css.closed]: !opened })}>
			<table className={css.table}>
				<thead className={css.tableHead}>
					<tr
						className={cx(css.tableRow, css.headRow)}
						style={{
							gridTemplateColumns: `repeat(${headers.length}, 1fr)`,
						}}
					>
						{headers.map((value, index) => (
							<th key={index} className={css.theadValue}>
								{parser(
									value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
								)}
							</th>
						))}
					</tr>
				</thead>
				<tbody className={css.tableBody}>
					{rows.map((row, rowIndex) => (
						<tr
							key={rowIndex}
							className={css.tableRow}
							style={{
								gridTemplateColumns: `repeat(${headers.length}, 1fr)`,
							}}
						>
							{row.map((value, valueKey) => (
								<td key={valueKey} className={css.tbodyValue}>
									<CellValue
										value={typeof value !== 'string' ? value.value : value}
										opacity={typeof value !== 'string' ? value.opacity : 1}
										isTotal={valueKey === 0}
									/>
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
