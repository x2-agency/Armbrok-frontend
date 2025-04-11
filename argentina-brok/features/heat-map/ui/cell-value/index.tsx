import cx from 'clsx';

import { defineCellColor } from '@/features/heat-map/helpers/define-cell-color';
import type { HeatMapItemData } from '@/shared/types/global.types';

import css from './index.module.css';

export const CellValue = ({ value, opacity }: HeatMapItemData) => {
	return (
		<>
			<div
				style={{
					opacity: opacity,
				}}
				className={cx(css.overlay, css[defineCellColor(value)])}
			/>
			<span className={css.label}>{value}</span>
		</>
	);
};
