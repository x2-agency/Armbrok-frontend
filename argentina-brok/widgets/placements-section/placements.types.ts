export type PlacementArticleProps = {
	title: string;
	description: string;
};

export type PlacementItemProps = {
	head: {
		icon: string;
		title: string;
		time: string;
	};
	subtitle?: Array<PlacementArticleProps>;
	body: Array<PlacementArticleProps>;
};

export type PlacementSectionProps = {
	items: Array<PlacementItemProps>;
	title?: string;
	className?: string;
};
