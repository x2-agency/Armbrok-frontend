import { monthOrder } from '@/features/heat-map/model/heat-map.constants';
import type {
	HeatMapItemData,
	HeatMapItemProps,
} from '@/shared/types/global.types';

type TransformedHeatMap = {
	headers: Array<string>;
	rows: Array<Array<HeatMapItemData | string>>;
};

export const transformHeatMapData = (
	heatMap: Array<HeatMapItemProps>
): TransformedHeatMap => {
	const headers = ['Total', 'Year', ...monthOrder];
	const rows: Array<Array<HeatMapItemData | string>> = [];

	for (const yearEntry of heatMap) {
		const [year, monthsData] = Object.entries(yearEntry)[0];

		const total = monthsData.total ?? '-';

		const monthCells: Array<HeatMapItemData> = monthOrder.map(month => {
			const entry = monthsData[month];

			if (
				typeof entry === 'object' &&
				entry !== null &&
				'value' in entry &&
				'opacity' in entry
			) {
				return {
					value: entry.value === '-' ? '0%' : entry.value,
					opacity: entry.opacity,
				};
			}

			// Пустые ячейки
			return {
				value: '0%',
				opacity: 0,
			};
		});

		const row: Array<HeatMapItemData | string> = [total, year, ...monthCells];
		rows.push(row);
	}

	return { headers, rows };
};
