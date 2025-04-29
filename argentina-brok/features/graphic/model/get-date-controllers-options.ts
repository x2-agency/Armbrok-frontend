import type { GraphicControllerProps } from '@/features/graphic/ui/graphic-date-controllers';

type GetControllersOptionsProps = {
	setRange: (type: string, count?: number) => void;
};

export const getDateControllersOptions = ({
	setRange,
}: GetControllersOptionsProps): Array<GraphicControllerProps> => {
	return [
		{ text: 'All time', setRange: () => setRange('all') },
		{ text: 'Year', setRange: () => setRange('year', 1) },
		{
			text: 'Half year',
			setRange: () => setRange('month', 6),
		},
		{ text: 'Month', setRange: () => setRange('month', 1) },
	];
};
