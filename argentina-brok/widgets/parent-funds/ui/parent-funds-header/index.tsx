import parser from 'html-react-parser';

import type { ItemDetail } from '@/shared/types/global.types';
import type { ParentFundsMode } from '@/widgets/parent-funds';

import css from './index.module.css';

type ParentFundsHeaderProps = {
	data: ItemDetail;
	mode: ParentFundsMode;
};

export const ParentFundsHeader = ({ data, mode }: ParentFundsHeaderProps) => {
	if (mode === 'slider') {
		return;
	}

	return (
		<div className={css.default}>
			{data.title && <h2 className={css.title}>{parser(data.title)}</h2>}
			{data.description && (
				<p className={css.description}>{parser(data.description)}</p>
			)}
		</div>
	);
};
