import parser from 'html-react-parser';

import type { AssetTypesItemProps } from '@/shared/types/global.types';

import css from './index.module.css';

export const MaturityItem = ({ label, value }: AssetTypesItemProps) => {
	return (
		<div className={css.root}>
			<div style={{ width: `${value}%` }} className={css.progress} />
			<p className={css.label}>{parser(label)}</p>
			<span className={css.dotted} />
			<p className={css.value}>{value.toLocaleString('ru-RU')}%</p>
		</div>
	);
};
