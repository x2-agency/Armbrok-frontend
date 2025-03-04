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
}: ShareholdersSection) => {
	return (
		<Container className={css.root}>
			<StockInformation title={stockInfoTitle} stockInfo={stockInfo} />
			<SignificantShareholders
				shareholders={shareholders}
				title={shareholdersTitle}
			/>
		</Container>
	);
};
