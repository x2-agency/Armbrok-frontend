import type Highcharts from 'highcharts/highstock';

import type { SelectedComparisonModeData } from '@/features/graphic/hooks/use-chart-context';

import type { SeriesSingleData } from './get-series-data';

export const getNormalizedGraphicSeries = (
	cleanedSeries: Array<SeriesSingleData>,
	comparisonMode: SelectedComparisonModeData
): Array<Highcharts.SeriesOptionsType> => {
	const firstNav = cleanedSeries[0]?.y ?? 0;

	const comparisonSeries = comparisonMode.mode
		? cleanedSeries.map(point => {
				const base =
					comparisonMode.mode === 'bankDeposit'
						? point.bankDeposit
						: point.fundIndex;

				const firstValue =
					comparisonMode.mode === 'bankDeposit'
						? cleanedSeries[0]?.bankDeposit
						: cleanedSeries[0]?.fundIndex;

				const percent =
					firstValue && firstValue !== 0 ? (base / firstValue - 1) * 100 : 0;

				return {
					x: point.x,
					y: percent,
				};
			})
		: [];

	const navSeriesPercent = cleanedSeries.map(point => {
		const percent =
			firstNav && point.y && firstNav !== 0
				? (point.y / firstNav - 1) * 100
				: 0;

		return {
			x: point.x,
			y: percent,
		};
	});

	const series: Array<Highcharts.SeriesOptionsType> =
		comparisonMode.mode === null
			? [
					{
						data: cleanedSeries,
						type: 'line',
						color: '#df2c29',
					},
				]
			: [
					{
						data: navSeriesPercent,
						type: 'line',
						color: '#df2c29',
					},
					{
						data: comparisonSeries,
						type: 'line',
						color:
							comparisonMode.mode === 'bankDeposit' ? '#2c7cdf' : '#00a86b',
					},
				];

	return series;
};
