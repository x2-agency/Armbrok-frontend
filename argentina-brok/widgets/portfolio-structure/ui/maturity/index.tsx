import parser from 'html-react-parser';

import type { AssetTypesSectionProps } from '@/shared/types/global.types';

import css from './index.module.css';
import { MaturityItem } from './maturity-item';

export const Maturity = ({ title, items }: AssetTypesSectionProps) => {
	return (
		<div className={css.root}>
			{title && <h5 className={css.title}>{parser(title)}</h5>}
			<ul className={css.list}>
				{items.map((value, index) => (
					<li key={index} className={css.paragraph}>
						<MaturityItem {...value} />
					</li>
				))}
			</ul>
		</div>
	);
};
