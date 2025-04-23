import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useMemo } from 'react';

import type { ParentFundChartPoint } from '@/shared/types/global.types';

import css from './index.module.css';

type DefaultChartProps = {
	chart: Array<ParentFundChartPoint>;
};

export const DefaultChart = ({ chart }: DefaultChartProps) => {
	const options = useMemo(() => {
		const categories = chart.map(point => {
			const [day, month, year] = point.date.split('/');
			const date = new Date(`${year}-${month}-${day}`);
			return date
				.toLocaleString('en-US', {
					month: 'short',
					year: '2-digit',
				})
				.replace(',', '');
		});

		const data = chart.map(point => point.unitPrice);
		const startValue = data[0];
		const endValue = data[data.length - 1];
		const growthPercent = (
			((endValue - startValue) / startValue) *
			100
		).toFixed(1);
		const hasGrown = endValue > startValue;
		const color = hasGrown ? '#34CA2F' : '#DF2C2999';

		return {
			chart: {
				backgroundColor: 'transparent',
				animation: false,
				reflow: true,
			},
			title: { text: undefined },
			xAxis: {
				categories,
				labels: {
					style: { color: '#666' },
					align: 'center',
				},
				tickLength: 0,
				lineColor: 'transparent',
			},
			yAxis: {
				visible: false,
				min: 0,
			},
			legend: {
				enabled: false,
			},
			tooltip: {
				enabled: false,
			},
			plotOptions: {
				area: {
					fillColor: {
						linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
						stops: [
							[0, color + '40'],
							[1, color + '00'],
						],
					},
					threshold: 0,
				},
				series: {
					enableMouseTracking: false,
					animation: false,
				},
			},
			series: [
				{
					type: 'area',
					data,
					lineWidth: 0,
					marker: { enabled: false },
				},
				{
					type: 'line',
					data,
					color,
					lineWidth: 2,
					marker: { enabled: false },
					zIndex: 2,
					dataLabels: [
						{
							enabled: true,
							align: 'right',
							verticalAlign: 'end',
							x: 320,
							y: -40,
							style: {
								color,
								fontSize: '14px',
								fontWeight: 'bold',
								textOutline: 'none',
							},
							formatter: function () {
								if (this.point.index === data.length - 1) {
									return `${hasGrown ? '+' : ''}${growthPercent}%`;
								}
								return null;
							},
						},
					],
				},
			],
			credits: { enabled: false },
		};
	}, [chart]);

	return (
		<div className={css.root}>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	);
};
