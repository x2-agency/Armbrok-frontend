import type { SecurityPaperItem } from '@/shared/types/global.types';
import { PlacementArticle } from '@/widgets/placements-section/ui/placement-article';

import css from './index.module.css';

export const PlacementSubtitle = ({
	ipoVolumeLabel,
	ipoVolumeValue,
	sharePriceLabel,
	sharePriceValue,
}: SecurityPaperItem) => {
	return (
		<ul className={css.root}>
			{ipoVolumeLabel && ipoVolumeValue && (
				<li className={css.subtitleArticle}>
					<PlacementArticle
						title={ipoVolumeLabel}
						description={ipoVolumeValue.toLocaleString('en-US')}
					/>
				</li>
			)}
			{sharePriceLabel && sharePriceValue && (
				<li className={css.subtitleArticle}>
					<PlacementArticle
						title={sharePriceLabel}
						description={sharePriceValue.toLocaleString('en-US')}
					/>
				</li>
			)}
		</ul>
	);
};
