import type { GraphicTabProps } from '@/widgets/fund-performance/ui/graphic-tabs';

export const NAV_PER_SHARE_MODE = 'share';
export const NAV_MODE = 'nav';

export const GRAPHIC_TABS: Array<GraphicTabProps> = [
	{
		text: 'NAV per Share',
		mode: NAV_PER_SHARE_MODE,
	},
	{
		text: 'NAV',
		mode: NAV_MODE,
	},
];
