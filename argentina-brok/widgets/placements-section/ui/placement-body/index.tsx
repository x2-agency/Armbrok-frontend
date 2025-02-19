import type { SecurityPaperItem } from '@/shared/types/global.types';
import { PlacementArticle } from '@/widgets/placements-section/ui/placement-article';

import css from './index.module.css';

export const PlacementBody = ({ infoBlock }: SecurityPaperItem) => {
	if (!infoBlock || infoBlock.length === 0) {
		return null;
	}

	return (
		<ul className={css.root}>
			{infoBlock.map((value, index) => (
				<li key={index} className={css.placementArticle}>
					<PlacementArticle
						title={value.title}
						description={value.description}
					/>
				</li>
			))}
		</ul>
	);
};
