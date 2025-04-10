import type Highcharts from 'highcharts/highstock';

export const graphicOptions = (
	seriesData: Array<Array<number>>
): Highcharts.Options => {
	const options: Highcharts.Options = {
		rangeSelector: {
			selected: 1,
			buttons: [
				{
					type: 'all',
					text: 'All time',
				},
				{
					type: 'month',
					count: 1,
					text: 'Month',
				},
				{
					type: 'year',
					count: 1,
					text: 'Year',
				},
				{
					type: 'month',
					count: 6,
					text: 'Half year',
				},
			],
			inputEnabled: false,
			buttonSpacing: 5,
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
