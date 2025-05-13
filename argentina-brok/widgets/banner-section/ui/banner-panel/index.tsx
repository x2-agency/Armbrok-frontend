import cx from 'clsx';

import type { InfoCard } from '@/shared/types/global.types';
import { Button } from '@/shared/ui/button';
import { BannerInfoList } from '@/widgets/banner-section/ui/banner-info-list';
import { BannerPercent } from '@/widgets/banner-section/ui/banner-percent';
import { BannerRiskLevel } from '@/widgets/banner-section/ui/banner-risk-level';

import css from './index.module.css';

export const BannerPanel = ({
	riskLevel,
	button,
	annualReturn,
	className,
	minInvestment,
	investmentPeriod,
}: InfoCard & { className?: string }) => {
	return (
		<article className={cx(css.root, className)}>
			<div className={css.content}>
				{annualReturn && (
					<BannerPercent
						value={annualReturn.value}
						label={annualReturn.label}
					/>
				)}
				<div className={css.group}>
					{minInvestment && (
						<BannerInfoList
							title={minInvestment.title ?? ''}
							description={minInvestment.description ?? ''}
						/>
					)}
					{riskLevel && (
						<BannerRiskLevel level={riskLevel.level} label={riskLevel.label} />
					)}
					{investmentPeriod && (
						<BannerInfoList
							title={investmentPeriod.title}
							description={investmentPeriod.description}
						/>
					)}
				</div>
			</div>
			{button && (
				<Button
					category="big"
					variant="filled"
					href={button.link}
					target="_blank"
					className={css.linkButton}
				>
					{button.text}
				</Button>
			)}
		</article>
	);
};
