import type { SecurityPaperItem } from '@/shared/types/global.types';

export type PlacementArticleProps = {
	title?: string;
	description?: string;
};

export type PlacementSubtitleProps = {
	subtitle: Array<PlacementArticleProps>;
};

export type PlacementBodyProps = {
	body: Array<PlacementArticleProps>;
};

export type PlacementItemProps = {
	head: {
		icon: string;
		title: string;
		time: string;
	};
	subtitle?: Array<PlacementArticleProps>;
	body: Array<PlacementArticleProps>;
	className?: string;
};

export type PlacementSectionProps = {
	items?: Array<SecurityPaperItem>;
	title?: string;
	className?: string;
};
