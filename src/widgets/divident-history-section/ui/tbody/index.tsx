/* eslint-disable @next/next/no-img-element */
import cx from 'clsx';
import Link from 'next/link';

import { Button } from '@/shared/ui/button';
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
	const defineIcon = (file?: TbodyType['file']) => {
		if (file?.ext === '.xlsx') {
			return '/assets/icon/file/excel.svg';
		}
		return '/assets/icon/file/file.svg';
	};

	return (
		<tbody className={css.tbody}>
			{list.map(item => (
				<tr key={item.id} className={cx(css.row, css.bodyRow)}>
					<td className={cx(css.tbodyValue, css.leftAlign)}>
						{formatDate(item.date)}
					</td>
					<td className={cx(css.tbodyValue, css.rightAlign)}>
						{item.financialYear}
					</td>

					<td className={cx(css.tbodyValue, css.rightAlign)}>
						{item.dividendSize}
					</td>
					<td className={cx(css.tbodyValue, css.rightAlign)}>
						<img
							loading="lazy"
							src={defineIcon()}
							className={css.icon}
							alt="icon"
						/>{' '}
						<Button
							variant="next"
							iconRotate={270}
							className={css.button}
							onClick={() => formatFileExt(item.file)}
						>
							Download
						</Button>
					</td>
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
