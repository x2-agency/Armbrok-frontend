import type { Instruments } from '@/shared/types/global.types';

import { Card } from './card';
import css from './index.module.css';

export type CardsProps = {
	instruments: Array<Instruments>;
};

export const Cards = ({ instruments }: CardsProps) => {
	return (
		<div className={css.root}>
			{instruments?.map((card, key) => <Card key={key} {...card} />)}
		</div>
	);
};
