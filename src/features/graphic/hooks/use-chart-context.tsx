import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';
import { createContext, useContext, useState } from 'react';

import type { CurrencyType } from '@/shared/types/global.types';

type ChartContextType = {
	comparisonMode: string | null;
	fundCurrency: CurrencyType;
	setComparisonMode: Dispatch<SetStateAction<string | null>>;
};

const ChartContext = createContext<ChartContextType | null>(null);

export const ChartProvider = ({
	children,
	fundCurrency,
}: PropsWithChildren & { fundCurrency: CurrencyType }) => {
	const [comparisonMode, setComparisonMode] = useState<string | null>(null);

	return (
		<ChartContext.Provider
			value={{ comparisonMode, fundCurrency, setComparisonMode }}
		>
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
