import type Highcharts from 'highcharts/highstock';

export const graphicOptions = (
	seriesData: Array<Array<number>>
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
			valueDecimals: 2,
			valueSuffix: ' USD',
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
		scrollbar: {
			enabled: true,
		},
	};

	return options;
};
