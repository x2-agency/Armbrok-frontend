import { Graphic } from '@/features/graphic';
import { ProfitTable } from '@/features/profit-table';
import type { PerformanceProps } from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';

export const FundPerformance = ({
	graphics,
	profitTable,
	heatMap,
}: PerformanceProps) => {
	return (
		<Container className={css.root}>
			<Graphic graphics={graphics} />
			<ProfitTable table={profitTable} />
		</Container>
	);
};
