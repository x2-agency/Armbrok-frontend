import type { ImageFormat } from '@/shared/types/global.types';

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
	poster?: {
		formats?: {
			large?: ImageFormat;
			small?: ImageFormat;
			medium?: ImageFormat;
			thumbnail?: ImageFormat;
		};
	};
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
