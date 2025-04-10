import type { GraphicItem } from '@/shared/types/global.types';

export const getSeriesData = (
	fundData: Array<GraphicItem>
): Array<Array<number>> =>
	fundData
		.map(item => {
			const [day, month, year] = item.date.split('/').map(Number);
			const date = new Date(year, month - 1, day);
			return [date.getTime(), item.nav];
		})
		.filter(([x, y]) => !isNaN(x) && !isNaN(y))
		.sort((a, b) => a[0] - b[0]);
