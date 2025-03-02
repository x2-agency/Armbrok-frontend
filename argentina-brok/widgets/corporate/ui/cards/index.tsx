import type { InstrumentType } from '@/view/home/types/response';

import { Card } from './card';
import css from './index.module.css';

export type CardsProps = {
	instruments: Array<InstrumentType>;
};

export const Cards = ({ instruments }: CardsProps) => {
	return (
		<div className={css.root}>
			{instruments?.map((card, key) => <Card card={card} key={key} />)}
		</div>
	);
};
