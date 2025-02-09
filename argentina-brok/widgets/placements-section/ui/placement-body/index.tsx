import type { PlacementBodyProps } from '@/widgets/placements-section/placements.types';
import { PlacementArticle } from '@/widgets/placements-section/ui/placement-article';

import css from './index.module.css';

export const PlacementBody = ({ body }: PlacementBodyProps) => {
	return (
		<ul className={css.root}>
			{body.map((value, index) => (
				<li key={index} className={css.placementArticle}>
					<PlacementArticle {...value} />
				</li>
			))}
		</ul>
	);
};
