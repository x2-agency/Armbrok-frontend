/* eslint-disable @next/next/no-img-element */
import cx from 'clsx';

import type { SecurityPaperItem } from '@/shared/types/global.types';
import type { PlacementCurrencyType } from '@/widgets/placements-section/ui/placement-currency';
import { PlacementCurrency } from '@/widgets/placements-section/ui/placement-currency';
import { PlacementFiles } from '@/widgets/placements-section/ui/placement-files';
import { PlacementHead } from '@/widgets/placements-section/ui/placement-head';

import css from './index.module.css';

export const PlacementItem = ({
	name,
	validityDate,
	primaryDescription,
	secondaryDescription,
	logo,
	className,
	files,
	columns = 3,
	fileDirection,
	lineClamp = 3,
	showLessButton,
	showMoreButton,
	prices,
}: SecurityPaperItem) => {
	return (
		<article className={cx(css.root, 'p-32', className)}>
			<div className={css.wrap}>
				<PlacementHead
					data={{
						logo,
						name,
						validityDate,
						primaryDescription,
						secondaryDescription,
					}}
				/>
				{prices && prices.length > 0 && (
					<PlacementCurrency data={prices as Array<PlacementCurrencyType>} />
				)}

				<PlacementFiles
					files={files ?? []}
					columns={columns}
					fileDirection={fileDirection}
					lineClamp={lineClamp}
					showLessButton={showLessButton}
					showMoreButton={showMoreButton}
				/>
			</div>
		</article>
	);
};
