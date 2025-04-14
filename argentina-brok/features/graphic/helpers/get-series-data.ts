import type { GraphicItem } from '@/shared/types/global.types';

export type SeriesSingleData = {
	x: number;
	y: number | undefined;
	nav: number | undefined;
	bankDeposit: number | undefined;
};

export const getSeriesData = (
	fundData: Array<GraphicItem>
): Array<SeriesSingleData> => {
	return fundData.map(item => {
		const [day, month, year] = item.date.split('/');
		const date = new Date(`${year}-${month}-${day}`).getTime();

		return {
			x: date,
			y: item.unitPrice,
			nav: item.nav,
			bankDeposit: item.bankDeposit,
		};
	});
};
