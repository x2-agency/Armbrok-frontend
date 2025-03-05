import cx from 'clsx';
import parser from 'html-react-parser';

import css from './index.module.css';
import type { PlacementSectionProps } from './placements.types';
import { PlacementItem } from './ui/placement-item';

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
			<div className={css.container}>
				<ul className={css.placements}>
					{items.map((value, index) => (
						<li key={index} className={css.placement}>
							<PlacementItem {...value} />
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};
