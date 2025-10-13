/* eslint-disable @next/next/no-img-element */
import parser from 'html-react-parser';

import { formatDateFromChart } from '@/features/graphic/helpers/format-date-from-chart';
import type { SecurityPaperItem } from '@/shared/types/global.types';

import css from './index.module.css';

export type PlacementHeadProps = {
	data: SecurityPaperItem;
};

export const PlacementHead = ({ data }: PlacementHeadProps) => {
	const { logo, name, validityDate, primaryDescription, secondaryDescription } =
		data;

	return (
		<header className={css.root}>
			<img src={logo?.url} loading="lazy" className={css.icon} />
			<div className={css.contentWrap}>
				<div className={css.headWrap}>
					{name && <h2 className={css.title}>{parser(name)}</h2>}

					{validityDate && (
						<div className={css.dateLabel}>
							<p className={css.date}>{parser(validityDate.label ?? '')}</p>
							<time className={css.date}>
								{formatDateFromChart(validityDate.value)}
							</time>
						</div>
					)}
				</div>
				<p className={css.primaryDescription}>
					{parser(primaryDescription ?? '')}
				</p>
				<p className={css.secondaryDescription}>
					{parser(secondaryDescription ?? '')}
				</p>
			</div>
		</header>
	);
};
