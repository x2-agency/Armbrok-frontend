/* eslint-disable react-hooks/rules-of-hooks */
import { useTranslations } from 'next-intl';

import type { GraphicControllerProps } from '@/features/graphic/ui/graphic-date-controllers';

type GetControllersOptionsProps = {
	setRange: (type: string, count?: number, customMin?: number) => void;
	currentDate?: Date;
};

export const getDateControllersOptions = ({
	setRange,
	currentDate = new Date(),
}: GetControllersOptionsProps): Array<GraphicControllerProps> => {
	const startOfYear = new Date(currentDate.getFullYear(), 0, 1).getTime();
	const t = useTranslations('graphicDateControllers');

	return [
		{ text: t('month'), setRange: () => setRange('month', 1) },
		{ text: t('threeMonth'), setRange: () => setRange('month', 3) },
		{ text: t('sixMonth'), setRange: () => setRange('month', 6) },
		{
			text: t('yearToDate'),
			setRange: () => setRange('custom', undefined, startOfYear),
		},
		{ text: t('year'), setRange: () => setRange('year', 1) },
		{ text: t('threeYears'), setRange: () => setRange('year', 3) },
		{ text: t('allTime'), setRange: () => setRange('all') },
	];
};
