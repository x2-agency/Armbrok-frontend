'use client';

import parser from 'html-react-parser';
import { useTranslations } from 'next-intl';
import { useCallback, useState } from 'react';

import { Graphic } from '@/features/graphic';
import { HeatMap } from '@/features/heat-map';
import { ProfitTable } from '@/features/profit-table';
import type { PerformanceProps } from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import { HideButton } from './ui/hide-button';

export const FundPerformance = ({
	graphics,
	profitTable,
	heatMap,
}: PerformanceProps) => {
	const t = useTranslations('fundPerformance');
	const [heatMapOpened, toggleHeatMap] = useState<boolean>(false);

	const toggleHeatMapCallback = useCallback(() => {
		toggleHeatMap(!heatMapOpened);
	}, [toggleHeatMap, heatMapOpened]);

	return (
		<Container className={css.root}>
			<h2 className={css.title}>{parser(t('title'))}</h2>
			<Graphic graphics={graphics} opened={heatMapOpened} />
			<ProfitTable table={profitTable} />
			<HideButton
				onClick={toggleHeatMapCallback}
				opened={heatMapOpened}
				className={css.hideButton}
			>
				Full performance
			</HideButton>
			<HeatMap heatMap={heatMap} opened={heatMapOpened} />
		</Container>
	);
};
