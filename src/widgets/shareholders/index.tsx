import cx from 'clsx';

import type { ShareholdersSection } from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import { SignificantShareholders } from './ui/significant-shareholders';
import { StockInformation } from './ui/stock-information';

export const Shareholders = ({
	stockInfoTitle,
	shareholders,
	shareholdersTitle,
	stockInfo,
	withoutStockInfo,
	className,
	title,
}: ShareholdersSection) => {
	return (
		<Container className={cx(css.root, className)}>
			{title && <h2 className={css.title}>{title}</h2>}
			<div
				className={cx(css.wrapper, {
					[css.onlyShareholders]: withoutStockInfo,
				})}
			>
				{!withoutStockInfo && (
					<StockInformation title={stockInfoTitle} stockInfo={stockInfo} />
				)}
				<SignificantShareholders
					shareholders={shareholders}
					title={shareholdersTitle}
					className={css.shareholders}
				/>
			</div>
		</Container>
	);
};
