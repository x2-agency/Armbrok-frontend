import cx from 'clsx';
import parser from 'html-react-parser';

import { defineFundRiskLevel } from '@/shared/helpers/define-fund-risk-color';
import type { RiskLevel } from '@/shared/types/global.types';

import css from './index.module.css';

export const BannerRiskLevel = ({ label, level }: RiskLevel) => (
	<ul className={css.list}>
		<li className={css.title}>
			{Array.from({ length: 5 }).map((_, key) => (
				<div
					key={key}
					style={{
						backgroundColor: key < level ? defineFundRiskLevel(level) : '',
					}}
					className={cx(css.circle, {
						[css.filled]: key < level,
					})}
				/>
			))}
		</li>
		<li className={css.description}>{parser(label ?? '')}</li>
	</ul>
);
