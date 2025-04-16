'use client';

import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

import type { GraphicMode, GraphicProps } from '@/shared/types/global.types';
import { NAV_MODE } from '@/widgets/fund-performance/model/fund-performance.constants';

import { getSeriesData } from './helpers/get-series-data';
import { useDateControllers } from './hooks/use-date-controllers';
import css from './index.module.css';
import { getDateControllersOptions } from './model/get-date-controllers-options';
import { graphicOptions } from './model/graphic-options';
import { GraphicDateControllers } from './ui/graphic-date-controllers';
import { GraphicFilter } from './ui/graphic-filter';

type GraphicComponentProps = {
	graphics: GraphicProps;
	mode: GraphicMode;
};

export const Graphic = ({ graphics, mode }: GraphicComponentProps) => {
	const fundKey: string = Object.keys(graphics)[0];
	const fundData = graphics[fundKey];

	const seriesData = getSeriesData(fundData, mode);
	const options = graphicOptions(seriesData, mode);

	const { chartRef, setRange } = useDateControllers();
	const dateControllers = getDateControllersOptions({ setRange });

	return (
		<div className={css.root}>
			<section className={css.controls}>
				<GraphicDateControllers buttons={dateControllers} />
				<GraphicFilter disabled={mode === NAV_MODE} className={css.pcFilter} />
			</section>
			<GraphicFilter
				disabled={mode === NAV_MODE}
				className={css.mobileFilter}
			/>
			<HighchartsReact
				highcharts={Highcharts}
				constructorType="stockChart"
				options={options}
				ref={chartRef}
			/>
		</div>
	);
};
