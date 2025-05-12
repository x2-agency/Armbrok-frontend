'use client';

import parser from 'html-react-parser';
import { useTranslations } from 'next-intl';
import { useCallback, useState } from 'react';

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
import { HideButton } from './ui/hide-button';

export const FundPerformance = ({
	graphics,
	profitTable,
	heatMap,
}: PerformanceProps) => {
	const t = useTranslations('fundPerformance');
	const [heatMapOpened, toggleHeatMap] = useState<boolean>(false);
	const [activeGraphicMode, setActiveGraphicMode] = useState<GraphicMode>(
		GRAPHIC_TABS[0].mode
	);

	const toggleHeatMapCallback = useCallback(() => {
		toggleHeatMap(!heatMapOpened);
	}, [toggleHeatMap, heatMapOpened]);

	return (
		<Container className={css.root}>
			<h2 className={css.title}>{parser(t('title'))}</h2>
			<GraphicTabs
				activeMode={activeGraphicMode}
				onClick={setActiveGraphicMode}
				tabs={GRAPHIC_TABS}
				className={css.tabs}
			/>
			<ChartProvider>
				<Graphic graphicData={graphics} mode={activeGraphicMode} />
			</ChartProvider>
			<ProfitTable table={profitTable} />
			{heatMap && (
				<HideButton
					onClick={toggleHeatMapCallback}
					opened={heatMapOpened}
					className={css.hideButton}
				>
					{parser(t('button'))}
				</HideButton>
			)}
			<HeatMap heatMap={heatMap} opened={heatMapOpened} />
		</Container>
	);
};
