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

	const processSeriesWithNulls = (
		series: Array<SeriesSingleData>,
		getValue: (point: SeriesSingleData) => number | null,
		startTime?: number
	) => {
		let baseValue: number | null = null;
		let needReset = true;
		let periodStarted = startTime === undefined;

		return series.map(point => {
			const rawValue = getValue(point);

			if (!periodStarted && startTime !== undefined && point.x >= startTime) {
				periodStarted = true;
				needReset = true;
			}

			if (!periodStarted) {
				return { x: point.x, y: null };
			}

			if (rawValue === null) {
				needReset = true;
				return { x: point.x, y: null };
			}

			if (needReset || baseValue === null) {
				baseValue = rawValue;
				needReset = false;
				return { x: point.x, y: 0 };
			}

			const percent = (rawValue / baseValue - 1) * 100;
			return { x: point.x, y: percent };
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
			point.indexes.find(index => index.name === comparisonMode)?.value ?? null,
		startTime
	);

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
			connectNulls: true,
			marker: {
				symbol: 'circle',
			},
		},
	];
};
