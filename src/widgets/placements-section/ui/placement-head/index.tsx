/* eslint-disable @next/next/no-img-element */
import parser from 'html-react-parser';

import type { SecurityPaperItem } from '@/shared/types/global.types';
import { formatDate } from '@/widgets/placements-section/helpers/format-date';

import css from './index.module.css';

export const PlacementHead = ({
	logo,
	name,
	launchDate,
	launchDateLabel,
}: SecurityPaperItem) => {
	return (
		<header className={css.header}>
			<img src={logo?.url} loading="lazy" className={css.icon} />
			<div className={css.titleBlock}>
				{name && <h2 className={css.title}>{parser(name)}</h2>}
				{launchDate && launchDateLabel && (
					<div className={css.dateLabel}>
						<p className={css.date}>{parser(launchDateLabel ?? '')}</p>
						<time className={css.date}>{formatDate(launchDate)}</time>
					</div>
				)}
			</div>
		</header>
	);
};
