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
}: ShareholdersSection) => {
	return (
		<Container
			className={cx(css.root, className, {
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
		</Container>
	);
};
