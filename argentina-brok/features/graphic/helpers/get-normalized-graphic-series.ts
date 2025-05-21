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

	const validPoints = filtered.filter(point => {
		const navValid = typeof point.y === 'number';
		const indexValue = point.indexes.find(
			index => index.name === comparisonMode
		)?.value;
		const indexValid = typeof indexValue === 'number';
		return navValid && indexValid;
	});

	const basePoint = validPoints[0] ?? filtered[0] ?? cleanedSeries[0];

	const baseNavValue = basePoint?.y !== 0 ? (basePoint?.y ?? 1) : 1;
	const baseComparisonRaw = basePoint?.indexes.find(
		index => index.name === comparisonMode
	)?.value;
	const baseComparisonValue =
		baseComparisonRaw && baseComparisonRaw > 0 ? baseComparisonRaw : 100;

	const navSeriesPercent = validPoints.map(point => {
		const currentValue = point.y!;
		const percentChange = (currentValue / baseNavValue - 1) * 100;

		return {
			x: point.x,
			y: percentChange,
		};
	});

	const comparisonSeries = validPoints.map(point => {
		const comparisonValue = point.indexes.find(
			index => index.name === comparisonMode
		)!.value!;
		return {
			x: point.x,
			y: (comparisonValue / baseComparisonValue - 1) * 100,
		};
	});

	return [
		{
			data: navSeriesPercent,
			type: 'line',
			color: '#df2c29',
			marker: {
				symbol: 'circle',
			},
		},
		{
			data: comparisonSeries,
			type: 'line',
			color: '#2c7cdf',
			connectNulls: false,
			marker: {
				symbol: 'circle',
			},
		},
	];
};
