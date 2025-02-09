import cx from 'clsx';

import { Container } from '@/shared/ui/container';
import type { PlacementItemProps } from '@/widgets/placements-section/placements.types';
import { PlacementBody } from '@/widgets/placements-section/ui/placement-body';
import { PlacementHead } from '@/widgets/placements-section/ui/placement-head';
import { PlacementSubtitle } from '@/widgets/placements-section/ui/placement-subtitle';

import css from './index.module.css';

export const PlacementItem = ({
	head,
	body,
	subtitle,
	className,
}: PlacementItemProps) => {
	return (
		<Container
			category="article"
			padding="min"
			className={cx(css.root, className)}
		>
			<PlacementHead {...head} />
			{subtitle && <PlacementSubtitle subtitle={subtitle} />}
			<PlacementBody body={body} />
		</Container>
	);
};
