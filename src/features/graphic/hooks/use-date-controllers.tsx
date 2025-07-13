import type { HighchartsReactRefObject } from 'highcharts-react-official';
import { useRef } from 'react';

export const useDateControllers = () => {
	const chartRef = useRef<HighchartsReactRefObject | null>(null);

	const setRange = (type: string, count?: number, customMin?: number) => {
		const chart = chartRef.current?.chart;

		if (!chart) return;

		const xAxis = chart.xAxis[0];
		const extremes = xAxis.getExtremes();

		let min = 0;
		const max = extremes.max;

		const now = new Date(max);
		switch (type) {
			case 'month':
				now.setMonth(now.getMonth() - (count || 1));
				min = now.getTime();
				break;
			case 'year':
				now.setFullYear(now.getFullYear() - (count || 1));
				min = now.getTime();
				break;
			case 'custom':
				min = customMin || extremes.dataMin;
				break;
			case 'all':
			default:
				min = extremes.dataMin;
				break;
		}

		xAxis.setExtremes(min, max);
	};

	return {
		chartRef,
		setRange,
	};
};
