import type { AssetTypesItemProps } from '@/shared/types/global.types';
import { Detail } from '@/widgets/company-details-section/ui/detail';

import css from './index.module.css';

export const MaturityItem = ({ label, value }: AssetTypesItemProps) => {
	return (
		<div className={css.root}>
			<div style={{ width: `${value}%` }} className={css.progress} />
			<div className={css.wrapper}>
				<Detail
					title={label}
					description={`${value.toLocaleString('ru-RU') + '%'}`}
				/>
			</div>
		</div>
	);
};
