/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import type Highcharts from 'highcharts/highstock';
import ReactDOMServer from 'react-dom/server';

import { clearSeriesData } from '@/features/graphic/helpers/clean-series';
import { formatDateFromChart } from '@/features/graphic/helpers/format-date-from-chart';
import type { SeriesSingleData } from '@/features/graphic/helpers/get-series-data';
import { useChartContext } from '@/features/graphic/hooks/use-chart-context';
import { CustomTooltipContent } from '@/features/graphic/ui/custom-tooltip-content';
import type { GraphicMode } from '@/shared/types/global.types';

import { graphicStyle } from './graphic-style';
import { navigatorOptions } from './navigator-options';

export const graphicOptions = (
	seriesData: Array<SeriesSingleData>,
	mode: GraphicMode
): Highcharts.Options => {
	const { comparisonMode } = useChartContext();
	const cleanedSeries = clearSeriesData(seriesData);

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

	const options: Highcharts.Options = {
		rangeSelector: {
			enabled: false,
		},
		xAxis: {
			type: 'datetime',
		},
		yAxis: {
			labels: {
				formatter: function () {
					const val =
						typeof this.value === 'string'
							? parseFloat(this.value)
							: this.value;

					return comparisonMode.mode === null
						? val.toFixed(0)
						: `${val.toFixed(2)}%`;
				},
			},
			opposite: false,
		},
		tooltip: {
			shared: true,
			useHTML: true,
			formatter: function () {
				const point = this.points?.[0]?.point || this.point;
				const date = formatDateFromChart(point.x);

				const first = cleanedSeries[0]?.y ?? 0;
				const current = point.y;

				const yieldValue =
					typeof current === 'number' &&
					typeof first === 'number' &&
					first !== 0
						? ((current - first) / first) * 100
						: 0;

				const jsx = (
					<CustomTooltipContent
						date={date}
						modeData={point.y}
						mode={mode}
						yieldNumber={yieldValue}
					/>
				);

				return ReactDOMServer.renderToStaticMarkup(jsx);
			},
			borderRadius: 16,
			borderWidth: 0,
			padding: 0,
			shadow: false,
		},
		series: series,
		navigator: navigatorOptions(),
		chart: {
			reflow: true,
		},
		responsive: {
			rules: graphicStyle(),
		},
	};

	return options;
};
