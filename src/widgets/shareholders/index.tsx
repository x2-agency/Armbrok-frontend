import cx from 'clsx';
import parser from 'html-react-parser';

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
		<>
			{title && <h2 className={css.title}>{parser(title)}</h2>}

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
		</>
	);
};
