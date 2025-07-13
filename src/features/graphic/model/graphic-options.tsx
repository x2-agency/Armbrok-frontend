/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import type Highcharts from 'highcharts/highstock';
import { useState } from 'react';
import ReactDOMServer from 'react-dom/server';

import { clearSeriesData } from '@/features/graphic/helpers/clean-series';
import { formatDateFromChart } from '@/features/graphic/helpers/format-date-from-chart';
import { getNormalizedGraphicSeries } from '@/features/graphic/helpers/get-normalized-graphic-series';
import type { SeriesSingleData } from '@/features/graphic/helpers/get-series-data';
import { useChartContext } from '@/features/graphic/hooks/use-chart-context';
import { CustomTooltipContent } from '@/features/graphic/ui/custom-tooltip-content';
import type { GraphicMode } from '@/shared/types/global.types';

import { graphicStyle } from './graphic-style';
import { navigatorOptions } from './navigator-options';
import { tooltipStyle } from './tooltip-style';
import { yAxisOptions } from './y-axis-options';

export const graphicOptions = (
	seriesData: Array<SeriesSingleData>,
	mode: GraphicMode
): Highcharts.Options => {
	const { fundCurrency } = useChartContext();
	const [startTime, setStartTime] = useState<number>(0);
	const [endTime, setEndTime] = useState<number>(0);
	const { comparisonMode } = useChartContext();
	const cleanedSeries = clearSeriesData(seriesData);
	const series = getNormalizedGraphicSeries(
		cleanedSeries,
		comparisonMode,
		startTime,
		endTime
	);

	const options: Highcharts.Options = {
		rangeSelector: {
			enabled: false,
		},
		xAxis: {
			type: 'datetime',
			events: {
				afterSetExtremes: function (e) {
					const startTime = e.min;
					const endTime = e.max;

					setStartTime(startTime);
					setEndTime(endTime);
				},
			},
		},
		yAxis: yAxisOptions(),
		tooltip: {
			formatter: function () {
				const point = this.points?.[0]?.point || this.point;
				const date = formatDateFromChart(point.x);

				if (!comparisonMode) {
					const nearestStartPoint = cleanedSeries?.reduce((prev, curr) =>
						Math.abs(curr.x - startTime) < Math.abs(prev.x - startTime)
							? curr
							: prev
					);

					const first = nearestStartPoint?.y ?? 0;
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
							currency={fundCurrency}
						/>
					);

					return ReactDOMServer.renderToStaticMarkup(jsx);
				} else {
					const jsx = (
						<CustomTooltipContent
							date={date}
							mode={mode}
							comparisonPoints={this.points?.map(p => ({
								name: p.series.name,
								y: p.y,
							}))}
							currency={fundCurrency}
						/>
					);

					return ReactDOMServer.renderToStaticMarkup(jsx);
				}
			},
			...tooltipStyle(),
		},
		series: series,
		navigator: navigatorOptions(),
		chart: {
			reflow: true,
			animation: false,
			zooming: {
				mouseWheel: {
					enabled: false,
				},
			},
		},
		responsive: {
			rules: graphicStyle(),
		},
	};

	return options;
};
