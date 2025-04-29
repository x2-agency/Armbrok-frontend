import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';
import { createContext, useContext, useState } from 'react';

type ChartContextType = {
	comparisonMode: string | null;
	setComparisonMode: Dispatch<SetStateAction<string | null>>;
};

const ChartContext = createContext<ChartContextType | null>(null);

export const ChartProvider = ({ children }: PropsWithChildren) => {
	const [comparisonMode, setComparisonMode] = useState<string | null>(null);

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
