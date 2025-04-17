import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';
import { createContext, useContext, useState } from 'react';

import { FILTER_DATA } from '@/features/graphic/model/graphic.constants';

type ComparisonModeType = 'bankDeposit' | 'fundIndex' | null;

export type SelectedComparisonModeData = {
	text: string;
	mode: ComparisonModeType;
};

type ChartContextType = {
	comparisonMode: SelectedComparisonModeData;
	setComparisonMode: Dispatch<SetStateAction<SelectedComparisonModeData>>;
};

const ChartContext = createContext<ChartContextType | null>(null);

export const ChartProvider = ({ children }: PropsWithChildren) => {
	const [comparisonMode, setComparisonMode] =
		useState<SelectedComparisonModeData>(FILTER_DATA.values[0]);

	return (
		<ChartContext.Provider value={{ comparisonMode, setComparisonMode }}>
			{children}
		</ChartContext.Provider>
	);
};

export const useChartContext = () => {
	const context = useContext(ChartContext);
	if (!context) {
		throw new Error('useChartContext must be used within a ChartProvider');
	}
	return context;
};
