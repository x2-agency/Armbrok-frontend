import type { MediaData } from '@/shared/types/global.types';

export type NewsSectionType = {
	title: string;
	moreButton: {
		text: string;
		link: string;
	};
	news: Array<NewsType>;
};

export type NewsSectionProps = {
	dataNews: NewsSectionType;
};

export type NewsType = {
	poster?: MediaData;
	id: number;
	publishDate: string;
	title: string;
	description: string;
	author: {
		avatar: string;
		name: string;
	};
	category: string;
};

export type NewsProps = {
	data: NewsType;
	className?: string;
};
