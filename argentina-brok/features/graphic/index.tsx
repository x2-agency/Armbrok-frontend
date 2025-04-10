'use client';

import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

import type { GraphicProps } from '@/shared/types/global.types';

import { getSeriesData } from './helpers/get-series-data';
import css from './index.module.css';
import { graphicOptions } from './model/graphic-options';
// import { GraphicDateControllers } from './ui/graphic-date-controllers';

export const Graphic = ({ graphics }: { graphics: GraphicProps }) => {
	const fundKey: string = Object.keys(graphics)[0];
	const fundData = graphics[fundKey];
	const seriesData = getSeriesData(fundData);
	const options = graphicOptions(seriesData);

	return (
		<div className={css.root}>
			{/* <GraphicDateControllers /> */}
			<HighchartsReact
				highcharts={Highcharts}
				constructorType="stockChart"
				options={options}
			/>
		</div>
	);
};
