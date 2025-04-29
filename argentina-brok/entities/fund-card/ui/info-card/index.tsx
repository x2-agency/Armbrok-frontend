import cx from 'clsx';
import parser from 'html-react-parser';

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
			<div className={css.group}>
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
							{Array.from({ length: 3 }).map((_, key) => (
								<div
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
			</div>
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
								: `-${annualReturn.value}`}
						</p>
					)}
					{annualReturn.label && (
						<p className={css.description}>{parser(annualReturn.label)}</p>
					)}
				</li>
			)}
		</ul>
	);
};
