import cx from 'clsx';
import parser from 'html-react-parser';

import { Button } from '@/shared/ui/button';
import type { PanelProps } from '@/widgets/banner-section/banner.types';

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
					<p className={css.percentData}>
						<span className={css.percent}>+{averagePercent.percent}%</span>
						<span className={css.percentText}>
							{parser(averagePercent.text)}
						</span>
					</p>
				)}
				{amd && (
					<ul className={css.list}>
						<li className={css.title}>{parser(amd.subtext)}</li>
						<li className={css.description}>{parser(amd.description)}</li>
					</ul>
				)}
				{riskLevel && (
					<ul className={css.list}>
						<li className={css.title}>
							{Array.from({ length: 3 }).map((_, key) => (
								<div
									key={key}
									className={cx(css.circle, {
										[css.filled]: key < riskLevel.risk,
									})}
								/>
							))}
						</li>
						<li className={css.description}>{riskLevel.text}</li>
					</ul>
				)}
				{period && (
					<ul className={css.list}>
						<li className={css.title}>{parser(period.title)}</li>
						<li className={css.description}>{parser(period.description)}</li>
					</ul>
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
