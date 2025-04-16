import type Highcharts from 'highcharts/highstock';
import ReactDOMServer from 'react-dom/server';

import { formatDateFromChart } from '@/features/graphic/helpers/format-date-from-chart';
import type { SeriesSingleData } from '@/features/graphic/helpers/get-series-data';
import { CustomTooltipContent } from '@/features/graphic/ui/custom-tooltip-content';
import type { GraphicMode } from '@/shared/types/global.types';

export const graphicOptions = (
	seriesData: Array<SeriesSingleData>,
	mode: GraphicMode
): Highcharts.Options => {
	const cleanedSeries = seriesData.filter(item => {
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
					const transformedValue =
						typeof this.value === 'string'
							? parseFloat(this.value)
							: this.value;

					return transformedValue.toFixed(0);
				},
			},
			opposite: false,
		},
		tooltip: {
			shared: false,
			useHTML: true,
			formatter: function () {
				const point = this.point;
				const date = formatDateFromChart(point.x);

				const jsx = (
					<CustomTooltipContent date={date} modeData={point.y} mode={mode} />
				);

				return ReactDOMServer.renderToStaticMarkup(jsx);
			},
			borderRadius: 16,
			borderWidth: 0,
			padding: 0,
			shadow: false,
		},
		series: [
			{
				name: 'NAV',
				data: cleanedSeries,
				type: 'line',
				color: '#df2c29',
			},
		],
		navigator: {
			enabled: true,
			maskFill: '#DF2C290D',
			handles: {
				backgroundColor: '#df2c29',
				borderColor: '#df2c29',
				width: 20,
				height: 20,
				symbols: ['circle', 'circle'],
			},
			xAxis: {
				labels: {
					style: {
						fontSize: '10px',
					},
				},
			},
		},
		chart: {
			reflow: true,
		},
		responsive: {
			rules: [
				{
					condition: {
						maxWidth: 768,
					},
					chartOptions: {
						xAxis: {
							labels: {
								style: {
									fontSize: '10px',
								},
							},
						},
						yAxis: {
							labels: {
								style: {
									fontSize: '10px',
								},
							},
						},
						tooltip: {
							style: {
								fontSize: '12px',
							},
						},
						navigator: {
							handles: {
								width: 20,
								height: 20,
							},
						},
					},
				},
			],
		},
	};

	return options;
};
