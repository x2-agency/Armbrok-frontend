import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

import type { GraphicProps } from '@/shared/types/global.types';

import { getSeriesData } from './helpers/get-series-data';
import { useDateControllers } from './hooks/use-date-controllers';
import css from './index.module.css';
import { getDateControllersOptions } from './model/get-date-controllers-options';
import { graphicOptions } from './model/graphic-options';
import { GraphicDateControllers } from './ui/graphic-date-controllers';
import { GraphicFilter } from './ui/graphic-filter';

export const Graphic = ({ graphics }: { graphics: GraphicProps }) => {
	const fundKey: string = Object.keys(graphics)[0];
	const fundData = graphics[fundKey];

	const seriesData = getSeriesData(fundData);
	const options = graphicOptions(seriesData);

	const { chartRef, setRange } = useDateControllers();
	const dateControllers = getDateControllersOptions({ setRange });

	return (
		<div className={css.root}>
			<section className={css.controls}>
				<GraphicDateControllers buttons={dateControllers} />
				<GraphicFilter />
			</section>
			<HighchartsReact
				highcharts={Highcharts}
				constructorType="stockChart"
				options={options}
				ref={chartRef}
				containerProps={{ style: { height: '400px' } }}
			/>
		</div>
	);
};
