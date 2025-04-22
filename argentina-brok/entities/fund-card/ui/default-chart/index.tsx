import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useMemo } from 'react';

import type { ParentFundChartPoint } from '@/shared/types/global.types';

type DefaultChartProps = {
	chart: Array<ParentFundChartPoint>;
};

export const DefaultChart = ({ chart }: DefaultChartProps) => {
	const options = useMemo(() => {
		const categories = chart.map(point => {
			const [day, month, year] = point.date.split('/');
			const date = new Date(`${year}-${month}-${day}`);
			return date.toLocaleString('en-US', {
				month: 'short',
				year: '2-digit',
			});
		});

		const data = chart.map(point => point.unitPrice);

		const hasGrown = data[data.length - 1] > data[0];
		const color = hasGrown ? '#34CA2F' : '#DF2C2999';

		return {
			chart: {
				backgroundColor: 'transparent',
				animation: false,
			},
			title: { text: undefined },
			xAxis: {
				categories,
				labels: { style: { color: '#666' } },
				tickLength: 0,
				lineColor: '#ccc',
			},
			yAxis: {
				visible: false,
			},
			legend: {
				enabled: false,
			},
			tooltip: {
				enabled: false,
			},
			plotOptions: {
				series: {
					enableMouseTracking: false,
					animation: false,
				},
			},
			series: [
				{
					type: 'line',
					data,
					color,
					marker: {
						enabled: false,
					},
					dataLabels: [
						{
							enabled: true,
							format: '{y:.2f}',
							align: 'right',
							style: {
								color,
								fontWeight: 'bold',
								textOutline: 'none',
							},
							// Показать только на последней точке
							formatter: function () {
								return this.point.index === data.length - 1
									? this.y.toFixed(2)
									: null;
							},
						},
					],
				},
			],
			credits: { enabled: false },
		};
	}, [chart]);

	return <HighchartsReact highcharts={Highcharts} options={options} />;
};
