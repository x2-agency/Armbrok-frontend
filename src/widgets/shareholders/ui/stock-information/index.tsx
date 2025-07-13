import parser from 'html-react-parser';

import type { StockInfoType } from '@/shared/types/global.types';

import css from './index.module.css';

type StockInformation = {
	title?: string;
	stockInfo?: Array<StockInfoType>;
};

export const StockInformation = ({ title, stockInfo }: StockInformation) => {
	if (!stockInfo || stockInfo.length === 0) {
		return null;
	}

	return (
		<article className={css.root}>
			{title && <h4 className={css.title}>{parser(title)}</h4>}
			<ul className={css.list}>
				{stockInfo.map((info, index) => (
					<li key={index} className={css.listItem}>
						<p className={css.label}>{parser(info.label)}</p>
						<span className={css.lines} />
						<p className={css.value}>{info.value.toLocaleString('en-US')}</p>
					</li>
				))}
			</ul>
		</article>
	);
};
