import type { GraphicItem, GraphicMode } from '@/shared/types/global.types';
import { NAV_PER_SHARE_MODE } from '@/widgets/fund-performance/model/fund-performance.constants';

export type SeriesSingleData = {
	x: number;
	y: number | undefined;
	bankDeposit: number;
	fundIndex: number;
};

export const getSeriesData = (
	fundData: Array<GraphicItem>,
	mode: GraphicMode
): Array<SeriesSingleData> => {
	return fundData.map(item => {
		const [day, month, year] = item.date.split('/');
		const date = new Date(`${year}-${month}-${day}`).getTime();

		return {
			x: date,
			y: mode === NAV_PER_SHARE_MODE ? item.unitPrice : item.nav,
			bankDeposit: item.bankDeposit ?? 0,
			fundIndex: item.fundIndex ?? 0,
		};
	});
};
