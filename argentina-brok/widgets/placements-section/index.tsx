import cx from 'clsx';
import parser from 'html-react-parser';

import css from './index.module.css';
import type { PlacementSectionProps } from './placements.types';
import PlacementSlider from './ui/placement-slider';

export const PlacementsSection = ({
	title,
	items,
	className,
}: PlacementSectionProps) => {
	if (!items || items.length === 0) {
		return null;
	}

	return (
		<section className={cx(css.root, className)}>
			{title && <h2 className={css.title}>{parser(title)}</h2>}

			<PlacementSlider className={css.card} items={items} />
		</section>
	);
};
