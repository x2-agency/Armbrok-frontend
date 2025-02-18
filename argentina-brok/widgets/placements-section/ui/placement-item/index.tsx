import type { SecurityPaperItem } from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';
import { PlacementBody } from '@/widgets/placements-section/ui/placement-body';
import { PlacementHead } from '@/widgets/placements-section/ui/placement-head';
import { PlacementSubtitle } from '@/widgets/placements-section/ui/placement-subtitle';

import css from './index.module.css';

export const PlacementItem = ({
	name,
	launchDate,
	launchDateLabel,
	ipoVolumeLabel,
	ipoVolumeValue,
	sharePriceLabel,
	sharePriceValue,
	logo,
	infoBlock,
}: SecurityPaperItem) => {
	return (
		<Container category="article" padding="p-32" className={css.root}>
			<PlacementHead
				logo={logo}
				name={name}
				launchDateLabel={launchDateLabel}
				launchDate={launchDate}
			/>
			<PlacementSubtitle
				ipoVolumeLabel={ipoVolumeLabel}
				ipoVolumeValue={ipoVolumeValue}
				sharePriceLabel={sharePriceLabel}
				sharePriceValue={sharePriceValue}
			/>
			<PlacementBody infoBlock={infoBlock} />
		</Container>
	);
};
