export type PlacementArticleProps = {
	title: string;
	description: string;
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
	items: Array<PlacementItemProps>;
	title?: string;
	className?: string;
};
