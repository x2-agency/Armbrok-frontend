import type { ParentFundChartPoint } from '@/shared/types/global.types';

import css from './index.module.css';

type SliderChartProps = {
	chart: Array<ParentFundChartPoint>;
};

export const SliderChart = ({ chart }: SliderChartProps) => {
	return <div className={css.root}></div>;
};
