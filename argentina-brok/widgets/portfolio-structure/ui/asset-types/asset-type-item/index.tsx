import parser from 'html-react-parser';

import type { AssetTypesItemProps } from '@/shared/types/global.types';
import { RingProgress } from '@/shared/ui/ring-progress';

import css from './index.module.css';

export const AssetTypeItem = ({ label, value }: AssetTypesItemProps) => {
	return (
		<article className={css.root}>
			<RingProgress value={value} className={css.ring} />
			<header className={css.about}>
				<h5 className={css.percent}>{value.toLocaleString('ru-RU')}%</h5>
				<p className={css.description}>{parser(label)}</p>
			</header>
		</article>
	);
};
