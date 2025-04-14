import type Highcharts from 'highcharts/highstock';
import ReactDOMServer from 'react-dom/server';

import { formatDateFromChart } from '@/features/graphic/helpers/format-date-from-chart';
import type { SeriesSingleData } from '@/features/graphic/helpers/get-series-data';
import { CustomTooltipContent } from '@/features/graphic/ui/custom-tooltip-content';

export const graphicOptions = (
	seriesData: Array<SeriesSingleData>
): Highcharts.Options => {
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
					return this.value + '%';
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
					<CustomTooltipContent
						date={date}
						unitPrice={point.y}
						nav={point.options?.nav}
						bankDeposit={point.options?.bankDeposit}
					/>
				);

				return ReactDOMServer.renderToStaticMarkup(jsx);
			},
			borderRadius: 16,
			borderWidth: 0,
		},
		series: [
			{
				name: 'NAV',
				data: seriesData,
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
		},
		chart: {
			reflow: false,
		},
	};

	return options;
};
