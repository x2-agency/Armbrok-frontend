import cx from 'clsx';
import parser from 'html-react-parser';

import type { ItemDetail } from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import type { TbodyType } from './ui/tbody';
import { Tbody } from './ui/tbody';
import type { TheadType } from './ui/thead';
import { Thead } from './ui/thead';

export type DividendHistorySectionType = ItemDetail & {
	headers: { list: Array<TheadType> };
	list: Array<TbodyType>;
};

export type DividendHistorySectionProps = {
	data?: DividendHistorySectionType;
};

export const DividendHistorySection = ({
	data,
}: DividendHistorySectionProps) => {
	if (!data) return null;

	const { headers, list, title } = data;

	return (
		<div>
			{title && <h2 className={css.title}>{parser(title)}</h2>}
			<Container className={cx(css.root)}>
				<table className={css.table}>
					<Thead list={headers.list} />
					<Tbody list={list} />
				</table>
			</Container>
		</div>
	);
};
