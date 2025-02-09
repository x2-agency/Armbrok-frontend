import type { PlacementItemProps } from '@/widgets/placements-section/placements.types';
import { PlacementArticle } from '@/widgets/placements-section/ui/placement-article';
import { PlacementHead } from '@/widgets/placements-section/ui/placement-head';

import css from './index.module.css';

export const PlacementItem = ({ head, body, subtitle }: PlacementItemProps) => {
	return (
		<article className={css.root}>
			<PlacementHead {...head} />
			{subtitle && (
				<ul className={css.subtitle}>
					{subtitle.map((value, index) => (
						<li key={index} className={css.subtitleArticle}>
							<PlacementArticle {...value} />
						</li>
					))}
				</ul>
			)}
			<ul className={css.body}>
				{body.map((value, index) => (
					<li key={index} className={css.placementArticle}>
						<PlacementArticle {...value} />
					</li>
				))}
			</ul>
		</article>
	);
};
