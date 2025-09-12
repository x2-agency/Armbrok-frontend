import cx from 'clsx';

import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import type { TbodyType } from './ui/tbody';
import { Tbody } from './ui/tbody';
import type { TheadType } from './ui/thead';
import { Thead } from './ui/thead';

export type DividendHistorySectionType = {
	headers: { list: Array<TheadType> };
	list: Array<TbodyType>;
};

export type DividendHistorySectionProps = {
	data?: DividendHistorySectionType;
};

export const DividentHistorySection = ({
	data,
}: DividendHistorySectionProps) => {
	if (!data) return null;

	const { headers, list } = data;

	return (
		<Container className={cx(css.root)}>
			<table className={css.table}>
				<Thead list={headers.list} />
				<Tbody list={list} />
			</table>
		</Container>
	);
};
