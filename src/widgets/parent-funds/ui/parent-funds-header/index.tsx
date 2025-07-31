import parser from 'html-react-parser';

import type { ItemDetail } from '@/shared/types/global.types';
import { Button } from '@/shared/ui/button';
import type { ParentFundsMode } from '@/widgets/parent-funds';

import css from './index.module.css';

type ParentFundsHeaderProps = {
	data: ItemDetail & { viewAllFundsButton?: string };
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
				{data.viewAllFundsButton && (
					<Button
						href="/funds#funds"
						variant="next"
						iconRotate={180}
						className={css.headButton}
					>
						{parser(data.viewAllFundsButton)}
					</Button>
				)}
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
