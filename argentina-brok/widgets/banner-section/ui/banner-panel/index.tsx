import cx from 'clsx';

import { Button } from '@/shared/ui/button';
import type { PanelProps } from '@/widgets/banner-section/banner.types';
import { BannerInfoList } from '@/widgets/banner-section/ui/banner-info-list';
import { BannerPercent } from '@/widgets/banner-section/ui/banner-percent';
import { BannerRiskLevel } from '@/widgets/banner-section/ui/banner-risk-level';

import css from './index.module.css';

export const BannerPanel = ({
	averagePercent,
	amd,
	riskLevel,
	period,
	button,
	className,
}: PanelProps) => {
	return (
		<article className={cx(css.root, className)}>
			<div className={css.content}>
				{averagePercent && (
					<BannerPercent
						percent={averagePercent.percent}
						text={averagePercent.text}
					/>
				)}
				{amd && (
					<BannerInfoList title={amd.subtext} description={amd.description} />
				)}
				{riskLevel && (
					<BannerRiskLevel risk={riskLevel.risk} text={riskLevel.text} />
				)}
				{period && (
					<BannerInfoList
						title={period.title}
						description={period.description}
					/>
				)}
			</div>
			{button && (
				<Button
					category="big"
					variant="filled"
					href={button.href}
					className={css.linkButton}
				>
					{button.text}
				</Button>
			)}
		</article>
	);
};
