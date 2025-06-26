'use client';

import parser from 'html-react-parser';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { Graphic } from '@/features/graphic';
import { ChartProvider } from '@/features/graphic/hooks/use-chart-context';
import { HeatMap } from '@/features/heat-map';
import { ProfitTable } from '@/features/profit-table';
import type {
	GraphicMode,
	PerformanceProps,
} from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import { GRAPHIC_TABS } from './model/fund-performance.constants';
import { GraphicTabs } from './ui/graphic-tabs';

export const FundPerformance = ({
	graphics,
	profitTable,
	heatMap,
	fundCurrency,
}: PerformanceProps) => {
	const t = useTranslations('fundPerformance');
	const [activeGraphicMode, setActiveGraphicMode] = useState<GraphicMode>(
		GRAPHIC_TABS[0].mode
	);

	return (
		<Container className={css.root}>
			<h2 className={css.title}>{parser(t('title'))}</h2>
			{graphics && (
				<>
					<GraphicTabs
						activeMode={activeGraphicMode}
						onClick={setActiveGraphicMode}
						tabs={GRAPHIC_TABS}
						className={css.tabs}
					/>
					<ChartProvider fundCurrency={fundCurrency}>
						<Graphic graphicData={graphics} mode={activeGraphicMode} />
					</ChartProvider>
				</>
			)}
			<ProfitTable table={profitTable} />
			{heatMap && <HeatMap heatMap={heatMap} />}
		</Container>
	);
};
