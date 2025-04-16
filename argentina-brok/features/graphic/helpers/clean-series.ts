import type { SeriesSingleData } from './get-series-data';

export const clearSeriesData = (seriesData: Array<SeriesSingleData>) =>
	seriesData.filter(item => {
		if (Array.isArray(item)) {
			return typeof item[0] === 'number' && typeof item[1] === 'number';
		}

		return (
			typeof item?.x === 'number' &&
			typeof item?.y === 'number' &&
			!isNaN(item.x) &&
			!isNaN(item.y)
		);
	});
