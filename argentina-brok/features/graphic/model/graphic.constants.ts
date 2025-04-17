import type { SelectedComparisonModeData } from '@/features/graphic/hooks/use-chart-context';

type FilterDataType = {
	text: string;
	values: Array<SelectedComparisonModeData>;
};

export const FILTER_DATA: FilterDataType = {
	text: 'Compare with',
	values: [
		{ text: 'Not selected', mode: null },
		{ text: 'Bank deposit', mode: 'bankDeposit' },
		{ text: 'Fund index', mode: 'fundIndex' },
	],
};

export const UNIT_PRICE_LABEL = 'Unit price';
export const NAV_LABEL = 'NAV';
