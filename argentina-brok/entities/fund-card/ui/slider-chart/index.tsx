import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useMemo } from 'react';

import type { ParentFundChartPoint } from '@/shared/types/global.types';

import css from './index.module.css';

type SliderChartProps = {
	chart: Array<ParentFundChartPoint>;
	annualReturnValue?: number;
};

export const SliderChart = ({ chart, annualReturnValue }: SliderChartProps) => {
	const options = useMemo(() => {
		const data = chart.map(point => point.unitPrice);

		const lineColor = annualReturnValue
			? annualReturnValue > 0
				? '#34CA2F'
				: '#DF2C29'
			: '#34CA2F';

		const minY = Math.min(...data);
		const maxY = Math.max(...data);

		return {
			chart: {
				backgroundColor: 'transparent',
				animation: false,
				reflow: true,
				margin: [0, 0, 0, 0],
			},
			title: { text: undefined },
			xAxis: {
				visible: false,
				startOnTick: false,
				endOnTick: false,
			},
			yAxis: {
				visible: false,
				min: minY,
				max: maxY,
				startOnTick: false,
				endOnTick: false,
				padding: 0,
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
					marker: { enabled: false },
					states: {
						hover: { enabled: false },
					},
					shadow: {
						color: lineColor + '90',
						offsetX: 0,
						offsetY: 2,
						width: 20,
					},
				},
			},
			series: [
				{
					type: 'line',
					data,
					color: lineColor,
					lineWidth: 2,
				},
			],
			credits: { enabled: false },
		};
	}, [chart, annualReturnValue]);

	return (
		<div className={css.root}>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	);
};
