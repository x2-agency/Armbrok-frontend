import type Highcharts from 'highcharts/highstock';

import type { SeriesSingleData } from './get-series-data';

export const getNormalizedGraphicSeries = (
	cleanedSeries: Array<SeriesSingleData>,
	comparisonMode: string | null,
	startTime?: number,
	endTime?: number
): Array<Highcharts.SeriesOptionsType> => {
	if (!comparisonMode) {
		return [
			{
				data: cleanedSeries,
				type: 'line',
				color: '#df2c29',
			},
		];
	}

	const filtered = cleanedSeries.filter(point => {
		return (
			(startTime === undefined || point.x >= startTime) &&
			(endTime === undefined || point.x <= endTime)
		);
	});

	const basePoint = filtered[0] ?? cleanedSeries[0];

	const baseNavValue = basePoint?.y !== 0 ? (basePoint?.y ?? 1) : 1;
	const baseComparisonValue =
		basePoint?.indexes.find(index => index.name === comparisonMode)?.value ?? 1;

	const navSeriesPercent = cleanedSeries.map(point => {
		const currentValue = point.y ?? baseNavValue;
		const percentChange = (currentValue / baseNavValue - 1) * 100;

		return {
			x: point.x,
			y: percentChange,
		};
	});

	const comparisonSeries = cleanedSeries.map(point => {
		const currentValue =
			point.indexes.find(index => index.name === comparisonMode)?.value ??
			baseComparisonValue;
		const percentChange = (currentValue / baseComparisonValue - 1) * 100;

		return {
			x: point.x,
			y: percentChange,
		};
	});

	return [
		{
			data: navSeriesPercent,
			type: 'line',
			color: '#df2c29',
		},
		{
			data: comparisonSeries,
			type: 'line',
			color: '#2c7cdf',
		},
	];
};
