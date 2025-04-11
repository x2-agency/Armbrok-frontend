import cx from 'clsx';
import parser from 'html-react-parser';

import type { HeatMapItemProps } from '@/shared/types/global.types';

import { defineCellColor } from './helpers/define-cell-color';
import { transformHeatMapData } from './helpers/transform-heat-map-data';
import css from './index.module.css';

type HeatMapProps = {
	heatMap: Array<HeatMapItemProps>;
	className?: string;
};

export const HeatMap = ({ heatMap, className }: HeatMapProps) => {
	const { headers, rows } = transformHeatMapData(heatMap);

	return (
		<table className={cx(css.root, className)}>
			<thead className={css.tableHead}>
				<tr className={cx(css.tableRow, css.headRow)}>
					{headers.map((value, index) => (
						<th key={index} className={css.theadValue}>
							{parser(value)}
						</th>
					))}
				</tr>
			</thead>
			<tbody className={css.tableBody}>
				{rows.map((row, rowIndex) => (
					<tr key={rowIndex} className={css.tableRow}>
						{row.map((value, valueKey) => (
							<td key={valueKey} className={cx(css.tbodyValue)}>
								<div
									style={{
										opacity: typeof value !== 'string' ? value.opacity : 1,
									}}
									className={cx(
										css.overlay,
										css[
											defineCellColor(
												typeof value !== 'string' ? value.value : value
											)
										]
									)}
								/>
								<span className={css.label}>
									{parser(typeof value !== 'string' ? value.value : value)}
								</span>
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};
