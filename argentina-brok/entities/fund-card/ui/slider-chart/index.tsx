import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useMemo } from 'react';

import type { ParentFundChartPoint } from '@/shared/types/global.types';

import css from './index.module.css';

type SliderChartProps = {
	chart: Array<ParentFundChartPoint>;
};

export const SliderChart = ({ chart }: SliderChartProps) => {
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
				},
			},
			series: [
				{
					type: 'line',
					data,
					color: '#3B82F6',
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
