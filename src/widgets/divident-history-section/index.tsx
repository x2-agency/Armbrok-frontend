import cx from 'clsx';
import parser from 'html-react-parser';

import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import type { TbodyType } from './ui/tbody';
import { Tbody } from './ui/tbody';
import type { TheadType } from './ui/thead';
import { Thead } from './ui/thead';

export type DividendHistorySectionType = {
	headers: { list: Array<TheadType> };
	list: Array<TbodyType>;
	title?: string;
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
		<Container id="dividend-history" className={cx(css.root)}>
			{title && <h2 className={css.title}>{parser(title)}</h2>}
			<table className={css.table}>
				<Thead list={headers.list} />
				<Tbody list={list} />
			</table>
		</Container>
	);
};
