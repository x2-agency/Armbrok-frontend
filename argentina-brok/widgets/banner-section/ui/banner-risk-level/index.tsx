import cx from 'clsx';

import css from './index.module.css';

type BannerRiskLevelProps = {
	risk: number;
	text: string;
};

export const BannerRiskLevel = ({ risk, text }: BannerRiskLevelProps) => (
	<ul className={css.list}>
		<li className={css.title}>
			{Array.from({ length: 3 }).map((_, key) => (
				<div
					key={key}
					className={cx(css.circle, {
						[css.filled]: key < risk,
					})}
				/>
			))}
		</li>
		<li className={css.description}>{text}</li>
	</ul>
);
