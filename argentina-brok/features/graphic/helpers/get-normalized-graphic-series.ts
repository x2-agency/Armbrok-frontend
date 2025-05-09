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
	const baseComparisonRaw = basePoint?.indexes.find(
		index => index.name === comparisonMode
	)?.value;
	const baseNavValue = basePoint?.y !== 0 ? (basePoint?.y ?? 1) : 1;
	const baseComparisonValue =
		baseComparisonRaw && baseComparisonRaw > 0 ? baseComparisonRaw : 100;

	const processSeriesWithNulls = (
		series: Array<SeriesSingleData>,
		getValue: (point: SeriesSingleData) => number | null
	) => {
		let lastValidValue: number = baseComparisonValue;
		return series.map(point => {
			const currentValue = getValue(point);

			if (currentValue !== null) {
				lastValidValue = currentValue;
			}

			return {
				x: point.x,
				y: (lastValidValue / baseComparisonValue - 1) * 100,
			};
		});
	};

	const navSeriesPercent = cleanedSeries.map(point => {
		const currentValue = point.y ?? baseNavValue;
		const percentChange = (currentValue / baseNavValue - 1) * 100;

		return {
			x: point.x,
			y: percentChange,
		};
	});

	const comparisonSeries = processSeriesWithNulls(
		cleanedSeries,
		point =>
			point.indexes.find(index => index.name === comparisonMode)?.value ?? null
	);

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
			connectNulls: true,
		},
	];
};
