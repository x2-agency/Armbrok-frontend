import parser from 'html-react-parser';

import type { AssetTypesSectionProps } from '@/shared/types/global.types';

import { AssetTypeItem } from './asset-type-item';
import css from './index.module.css';

export const AssetTypes = ({ title, items }: AssetTypesSectionProps) => {
	return (
		<div className={css.root}>
			{title && <h5 className={css.title}>{parser(title)}</h5>}
			<ul className={css.list}>
				{items.map((value, index) => (
					<li className={css.paragraph} key={index}>
						<AssetTypeItem {...value} />
					</li>
				))}
			</ul>
		</div>
	);
};
