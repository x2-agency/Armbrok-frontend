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
	id: number;
	piblishDate: string;
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
