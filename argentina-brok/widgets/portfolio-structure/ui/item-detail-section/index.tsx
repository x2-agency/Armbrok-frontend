import cx from 'clsx';
import parser from 'html-react-parser';

import type { AssetTypesSectionProps } from '@/shared/types/global.types';

import css from './index.module.css';
import { ItemDetail } from './item-detail';

export const ItemDetailSection = ({
	title,
	items,
	className,
}: AssetTypesSectionProps & { className?: string }) => {
	return (
		<div className={cx(css.root, className)}>
			{title && <h4 className={css.title}>{parser(title)}</h4>}
			<ul className={css.list}>
				{items.map((value, index) => (
					<li className={css.paragraph} key={index}>
						<ItemDetail {...value} />
					</li>
				))}
			</ul>
		</div>
	);
};
