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

	const processSeriesWithNulls = (
		series: Array<SeriesSingleData>,
		getValue: (point: SeriesSingleData) => number | null
	) => {
		let lastValidValue: number | null = null;
		return series
			.map(point => {
				const currentValue = getValue(point);

				if (currentValue === null) {
					return {
						x: point.x,
						y:
							lastValidValue !== null
								? (lastValidValue / baseComparisonValue - 1) * 100
								: null,
					};
				}

				lastValidValue = currentValue;

				return {
					x: point.x,
					y: (currentValue / baseComparisonValue - 1) * 100,
				};
			})
			.filter(point => point.y !== null);
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
