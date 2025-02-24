import type { Article } from './article';

export type MediaType = {
	title: string;
	description: string;
	moreButton: {
		text: string;
		link: string;
	};
	emailForm: {
		title: string;
		description: string;
		emailPlaceholder: string;
		subscribeButtonText: string;
	};
	glossaryCard: glossaryCard;
	articles: Array<Article>;
};

export type glossaryCard = {
	title?: string;
	description?: string;
	icon?: {
		url: string;
	};
	link: {
		text: string;
		link?: string;
	};
};

export type MediaProps = {
	data: MediaType;
};
