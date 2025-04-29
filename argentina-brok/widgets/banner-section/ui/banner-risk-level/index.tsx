import cx from 'clsx';
import parser from 'html-react-parser';

import type { RiskLevel } from '@/shared/types/global.types';

import css from './index.module.css';

export const BannerRiskLevel = ({ label, level }: RiskLevel) => (
	<ul className={css.list}>
		<li className={css.title}>
			{Array.from({ length: 3 }).map((_, key) => (
				<div
					key={key}
					className={cx(css.circle, {
						[css.filled]: key < level,
					})}
				/>
			))}
		</li>
		<li className={css.description}>{parser(label ?? '')}</li>
	</ul>
);
