import cx from 'clsx';
import parser from 'html-react-parser';

import { defineFundRiskLevel } from '@/shared/helpers/define-fund-risk-color';
import type { InfoCard as InfoCardProps } from '@/shared/types/global.types';

import css from './index.module.css';

export const InfoCard = ({
	annualReturn,
	minInvestment,
	riskLevel,
	className,
}: InfoCardProps & { className?: string }) => {
	return (
		<ul className={cx(css.root, className)}>
			{minInvestment && (
				<li className={css.paragraph}>
					{minInvestment.title && (
						<p className={css.label}>{parser(minInvestment.title)}</p>
					)}
					{minInvestment.description && (
						<p className={css.description}>
							{parser(minInvestment.description)}
						</p>
					)}
				</li>
			)}
			{riskLevel && (
				<li className={cx(css.paragraph, css.risk)}>
					<div className={css.risks}>
						{Array.from({ length: 5 }).map((_, key) => (
							<div
								style={{
									backgroundColor:
										key < riskLevel.level
											? defineFundRiskLevel(riskLevel.level)
											: '',
								}}
								className={cx(css.circle, {
									[css.painted]: key < riskLevel.level,
								})}
								key={key}
							/>
						))}
					</div>
					{riskLevel.label && (
						<p className={css.description}>{parser(riskLevel.label)}</p>
					)}
				</li>
			)}
			{annualReturn && (
				<li className={css.annualReturn}>
					{annualReturn.value && (
						<p
							className={cx(css.value, {
								[css.positive]: annualReturn.value > 0,
							})}
						>
							{annualReturn.value > 0
								? `+${annualReturn.value}%`
								: `${annualReturn.value}%`}
						</p>
					)}
				</li>
			)}
		</ul>
	);
};
