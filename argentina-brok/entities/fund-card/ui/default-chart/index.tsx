'use client';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useMemo } from 'react';

import useMediaQuery from '@/shared/hooks/use-media-query';
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
	const isMobile = useMediaQuery('(max-width: 767px)');
	const isTablet = useMediaQuery('(max-width: 1200px)');

	const options = useMemo(() => {
		const categories = chart.map(point => {
			const [day, month, year] = point.date.split('/');
			return `${year}-${month}-${day}`;
		});

		const data = chart.map(point => point.unitPrice);
		const hasGrown = annualReturnValue ? annualReturnValue > 0 : false;
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
					style: { color: '#666', fontSize: '14px' },
					align: 'center',
					step: isTablet || isMobile ? 25 : 10,
					formatter: function () {
						const date = new Date(this.value);
						return date
							.toLocaleString('en-US', {
								month: 'short',
								year: '2-digit',
							})
							.replace(',', '');
					},
				},
				tickLength: 0,
				lineColor: 'transparent',
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
						},
					],
				},
			],
			credits: { enabled: false },
		};
	}, [chart, annualReturnValue, isMobile, isTablet]);

	return (
		<div className={css.root}>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	);
};
