/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useMemo } from 'react';

import type { ParentFundChartPoint } from '@/shared/types/global.types';

import css from './index.module.css';

type DefaultChartProps = {
	chart: Array<ParentFundChartPoint>;
	annualReturnValue?: number;
};

export const DefaultChart = ({
	chart,
	annualReturnValue,
}: DefaultChartProps) => {
	if (!chart || !chart.length) {
		return null;
	}

	const options = useMemo(() => {
		const data = chart.map(point => {
			const [day, month, year] = point.date.split('/');
			return [Date.UTC(+year, +month - 1, +day), point.unitPrice];
		});

		const hasGrown = annualReturnValue ? annualReturnValue > 0 : false;
		const color = hasGrown ? '#34CA2F' : '#DF2C29';

		return {
			chart: {
				backgroundColor: 'transparent',
				animation: false,
				reflow: true,
				marginRight: 55,
				overflow: 'visible',
			},
			title: { text: undefined },
			xAxis: {
				type: 'datetime',
				labels: {
					style: { color: '#666', fontSize: '14px' },
					format: '{value:%b %y}', // Jan 24
				},
				tickLength: 0,
				lineColor: 'transparent',
				tickPositioner: function () {
					const positions: Array<number> = [];
					const seen = new Set<string>();

					const data = chart
						.map(point => {
							const [day, month, year] = point.date.split('/');
							return Date.UTC(+year, +month - 1, +day);
						})
						.sort((a, b) => a - b);

					for (const timestamp of data) {
						const date = new Date(timestamp);
						const key = `${date.getUTCFullYear()}-${date.getUTCMonth()}`;
						if (!seen.has(key)) {
							seen.add(key);
							positions.push(
								Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 1)
							);
						}
					}

					return positions;
				},
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
				area: {
					fillColor: {
						linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
						stops: [
							[0, color + '40'],
							[1, color + '00'],
						],
					},
					threshold: -1,
				},
				series: {
					enableMouseTracking: false,
					animation: false,
					dataLabels: {
						allowOverlap: true,
						crop: false,
						overflow: 'none',
					},
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
							align: 'left',
							verticalAlign: 'middle',
							backgroundColor: color,
							borderRadius: 6,
							padding: 6,
							x: 5,
							y: 0,
							style: {
								color: '#fff',
								fontSize: '12px',
								fontWeight: 'bold',
								textOutline: 'none',
							},
							formatter: function () {
								if (this.point.index === data.length - 1) {
									return `${hasGrown ? '+' : ''}${annualReturnValue}%`;
								}
								return null;
							},
							crop: false,
							overflow: 'none',
						},
					],
				},
			],
			credits: { enabled: false },
		};
	}, [chart, annualReturnValue]);

	return (
		<div className={css.root} style={{ overflow: 'visible' }}>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	);
};
