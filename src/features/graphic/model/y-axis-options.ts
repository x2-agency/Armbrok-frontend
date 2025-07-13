/* eslint-disable react-hooks/rules-of-hooks */
import type Highcharts from 'highcharts/highstock';

import { useChartContext } from '@/features/graphic/hooks/use-chart-context';

import { formatWithSuffix } from './format-with-suffix';

export const yAxisOptions = ():
	| Highcharts.YAxisOptions
	| Array<Highcharts.YAxisOptions> => {
	const { comparisonMode } = useChartContext();

	return {
		labels: {
			formatter: function () {
				const val =
					typeof this.value === 'string' ? parseFloat(this.value) : this.value;

				return comparisonMode === null
					? formatWithSuffix(val)
					: `${val.toFixed(2)}%`;
			},
		},
		opposite: false,
	};
};
