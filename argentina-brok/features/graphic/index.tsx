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
		title: {
			text: fundKey,
		},
		rangeSelector: {
			selected: 1,
		},
		xAxis: {
			type: 'datetime',
		},
		yAxis: {
			title: {
				text: 'NAV',
			},
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
			},
		],
		navigator: {
			enabled: true,
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
