import parser from 'html-react-parser';
import { useTranslations } from 'next-intl';

import type { ItemDetail } from '@/shared/types/global.types';
import { Button } from '@/shared/ui/button';
import type { ParentFundsMode } from '@/widgets/parent-funds';

import css from './index.module.css';

type ParentFundsHeaderProps = {
	data: ItemDetail;
	mode: ParentFundsMode;
};

export const ParentFundsHeader = ({ data, mode }: ParentFundsHeaderProps) => {
	const t = useTranslations('viewAllFunds');

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
					{parser(t('text'))}
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
