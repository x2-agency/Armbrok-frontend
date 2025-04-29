import parser from 'html-react-parser';

import type { InvestmentPeriod } from '@/shared/types/global.types';

import css from './index.module.css';

export const BannerInfoList = ({ title, description }: InvestmentPeriod) => (
	<ul className={css.list}>
		<li className={css.title}>{parser(title ?? '')}</li>
		<li className={css.description}>{parser(description ?? '')}</li>
	</ul>
);
