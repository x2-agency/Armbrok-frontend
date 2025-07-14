import type { AssetTypesItemProps } from '@/shared/types/global.types';
import { Detail } from '@/widgets/company-details-section/ui/detail';

import css from './index.module.css';

export const ItemDetail = ({ value, label }: AssetTypesItemProps) => {
	return (
		<div className={css.root}>
			<Detail
				title={label}
				description={`${value.toLocaleString('ru-RU') + '%'}`}
			/>
		</div>
	);
};
