import parser from 'html-react-parser';
import { useTranslations } from 'next-intl';

import { Graphic } from '@/features/graphic';
import { ProfitTable } from '@/features/profit-table';
import type { PerformanceProps } from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';

export const FundPerformance = ({
	graphics,
	profitTable,
	// heatMap,
}: PerformanceProps) => {
	const t = useTranslations('fundPerformance');

	return (
		<Container className={css.root}>
			<h2 className={css.title}>{parser(t('title'))}</h2>
			<Graphic graphics={graphics} />
			<ProfitTable table={profitTable} />
		</Container>
	);
};
