import cx from 'clsx';
import Link from 'next/link';

import { formatDate } from '@/widgets/divident-history-section/helpers/format-date';
import { formatFileExt } from '@/widgets/divident-history-section/helpers/format-file-ext';

import css from './index.module.css';

export type TbodyType = {
	id: number;
	dividendSize: number;
	financialYear: number;
	date: number;
	file?: {
		name?: string;
		url?: string;
		size?: number;
		ext?: '.pdf' | '.xlsx';
	};
};

export type TBodyProps = {
	list: Array<TbodyType>;
};

export const Tbody = ({ list }: TBodyProps) => {
	return (
		<tbody className={css.tbody}>
			{list.map(item => (
				<tr key={item.id} className={cx(css.row, css.bodyRow)}>
					<td className={css.tbodyValue}>{formatDate(item.date)}</td>
					<td className={css.tbodyValue}>{item.financialYear}</td>

					<td className={css.tbodyValue}>{item.dividendSize}</td>
					<td className={css.tbodyValue}>{formatFileExt(item.file)}</td>
					<Link
						href={item?.file?.url ?? '#'}
						className={css.link}
						target="_blank"
					/>
				</tr>
			))}
		</tbody>
	);
};
