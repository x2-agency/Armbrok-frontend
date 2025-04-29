import parser from 'html-react-parser';

import type { AnnualReturn } from '@/shared/types/global.types';

import css from './index.module.css';

export const BannerPercent = ({ value, label }: AnnualReturn) => (
	<p className={css.percentData}>
		<span className={css.percent}>+{value}%</span>
		<span className={css.percentText}>{parser(label ?? '')}</span>
	</p>
);
