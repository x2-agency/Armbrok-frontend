import type Highcharts from 'highcharts/highstock';

export const navigatorOptions = (): Highcharts.NavigatorOptions => {
	return {
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
	};
};
