'use client';

import cx from 'clsx';
import parser from 'html-react-parser';
import { useEffect, useRef, useState } from 'react';

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
	const { headers, rows } = transformHeatMapData(heatMap);
	const tableRef = useRef<HTMLDivElement | null>(null);
	const [height, setHeight] = useState<string | number>(
		opened ? 'auto' : '0px'
	);

	useEffect(() => {
		const el = tableRef.current;
		if (!el) return;

		if (opened) {
			const scrollHeight = el.scrollHeight;
			setHeight(`${scrollHeight}px`);

			const handleTransitionEnd = () => {
				setHeight('auto');
				el.removeEventListener('transitionend', handleTransitionEnd);
			};
			el.addEventListener('transitionend', handleTransitionEnd);
		} else {
			if (height === 'auto') {
				const scrollHeight = el.scrollHeight;
				setHeight(`${scrollHeight}px`);
				requestAnimationFrame(() => {
					setHeight('0px');
				});
			} else {
				setHeight('0px');
			}
		}
	}, [opened, height]);

	return (
		<div
			className={cx(css.root, className)}
			ref={tableRef}
			style={{
				overflow: 'hidden',
				transition: 'height 0.3s ease',
				height,
			}}
		>
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
								{parser(value)}
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
