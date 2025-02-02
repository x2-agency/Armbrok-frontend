import parser from 'html-react-parser';
import cx from 'clsx';

import { PanelProps } from '../../banner.types';

import css from './index.module.css';
import { Button } from '@/shared/ui/button';

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
						<li className={css.title}></li>
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
				<Button variant="filled" href={button.href} className={css.linkButton}>
					{button.text}
				</Button>
			)}
		</article>
	);
};
