import parser from 'html-react-parser';

import type { SecurityPaperItem } from '@/shared/types/global.types';
import { formatDate } from '@/widgets/divident-history-section/helpers/format-date';

import css from './index.module.css';

export type PlacementHeadProps = {
	data: SecurityPaperItem;
};

export const PlacementHead = ({ data }: PlacementHeadProps) => {
	const { name, validityDate, primaryDescription, secondaryDescription } = data;

	return (
		<header className={css.root}>
			<div className={css.headWrap}>
				{name && <h2 className={css.title}>{parser(name)}</h2>}

				{validityDate && (
					<div className={css.dateLabel}>
						<p className={css.date}>{parser(validityDate.label ?? '')}</p>
						<time className={css.date}>{formatDate(validityDate.value)}</time>
					</div>
				)}
			</div>
			<p className={css.primaryDescription}>
				{parser(primaryDescription ?? '')}
			</p>
			<p className={css.secondaryDescription}>
				{parser(secondaryDescription ?? '')}
			</p>
		</header>
	);
};
