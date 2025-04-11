import cx from 'clsx';

import { defineCellColor } from '@/features/heat-map/model/define-cell-color';
import type { HeatMapItemData } from '@/shared/types/global.types';

import css from './index.module.css';

export const CellValue = ({ value, opacity }: HeatMapItemData) => {
	const { background, color } = defineCellColor(value, opacity);

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
