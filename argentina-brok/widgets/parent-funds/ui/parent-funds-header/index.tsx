import parser from 'html-react-parser';

import type { ItemDetail } from '@/shared/types/global.types';
import { Button } from '@/shared/ui/button';
import type { ParentFundsMode } from '@/widgets/parent-funds';
import { VIEW_ALL_FUNDS_BUTTON } from '@/widgets/parent-funds/model/parent-funds.constants';

import css from './index.module.css';

type ParentFundsHeaderProps = {
	data: ItemDetail;
	mode: ParentFundsMode;
};

export const ParentFundsHeader = ({ data, mode }: ParentFundsHeaderProps) => {
	if (mode === 'slider') {
		return (
			<div className={css.slider}>
				<div className={css.headBlock}>
					{data.title && <h4 className={css.title}>{parser(data.title)}</h4>}
					{data.description && (
						<p className={css.description}>{parser(data.description)}</p>
					)}
				</div>
				<Button href="/funds#funds" variant="next" iconRotate={180}>
					{parser(VIEW_ALL_FUNDS_BUTTON)}
				</Button>
			</div>
		);
	}

	return (
		<div className={css.default} id="funds">
			{data.title && <h2 className={css.title}>{parser(data.title)}</h2>}
			{data.description && (
				<p className={css.description}>{parser(data.description)}</p>
			)}
		</div>
	);
};
