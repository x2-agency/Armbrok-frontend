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

		return {
			chart: {
				backgroundColor: 'transparent',
				animation: false,
				reflow: true,
			},
			title: { text: undefined },
			xAxis: {
				visible: false,
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
					marker: { enabled: false },
					states: {
						hover: { enabled: false },
					},
					shadow: {
						color: annualReturnValue
							? annualReturnValue > 0
								? '#34CA2F80'
								: '#DF2C2980'
							: '#34CA2F80',
						offsetX: 0,
						offsetY: 0,
						opacity: 0.5,
						width: 6,
					},
				},
			},
			series: [
				{
					type: 'line',
					data,
					color: annualReturnValue
						? annualReturnValue > 0
							? '#34CA2F'
							: '#DF2C29'
						: '#34CA2F',
					lineWidth: 2,
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
