'use client';

import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

import type { GraphicProps } from '@/shared/types/global.types';

import css from './index.module.css';

export const Graphic = ({ graphics }: GraphicProps) => {
	const fundKey = Object.keys(graphics)[0];
	const fundData = graphics[fundKey];

	const seriesData = fundData
		.map(item => {
			const [day, month, year] = item.date.split('/').map(Number);
			const date = new Date(year, month - 1, day);
			return [date.getTime(), item.nav];
		})
		.filter(([x, y]) => !isNaN(x) && !isNaN(y))
		.sort((a, b) => a[0] - b[0]);

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

	return (
		<div className={css.root}>
			<HighchartsReact
				highcharts={Highcharts}
				constructorType="stockChart"
				options={options}
			/>
		</div>
	);
};
