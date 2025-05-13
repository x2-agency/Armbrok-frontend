import cx from 'clsx';

import { defineCellColor } from '@/features/heat-map/model/define-cell-color';
import type { HeatMapItemData } from '@/shared/types/global.types';

import css from './index.module.css';

export const CellValue = ({
	value,
	opacity,
	isTotal = false,
}: HeatMapItemData & { isTotal?: boolean }) => {
	const { background, color } = defineCellColor(value, isTotal, opacity);

	return (
		<>
			<div
				style={{
					backgroundColor: background,
				}}
				className={cx(css.overlay)}
			/>
			<span className={css.label} style={{ color: color }}>
				{value}
			</span>
		</>
	);
};
