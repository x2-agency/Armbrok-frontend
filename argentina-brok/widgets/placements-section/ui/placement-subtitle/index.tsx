import type { PlacementSubtitleProps } from '@/widgets/placements-section/placements.types';
import { PlacementArticle } from '@/widgets/placements-section/ui/placement-article';

import css from './index.module.css';

export const PlacementSubtitle = ({ subtitle }: PlacementSubtitleProps) => {
	return (
		<ul className={css.root}>
			{subtitle.map((value, index) => (
				<li key={index} className={css.subtitleArticle}>
					<PlacementArticle {...value} />
				</li>
			))}
		</ul>
	);
};
