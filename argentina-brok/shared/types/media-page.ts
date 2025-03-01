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
	glossaryCard: GlossaryCardType;
	articles: Array<Article>;
};

export type GlossaryCardType = {
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
	data: MediaPageProps;
};

/////////////

export type MediaPageProps = {
	data: {
		title?: string;
		description?: string;
		moreButton?: {
			text?: string;
			link?: string;
		};
		emailForm?: {
			title?: string;
			description?: string;
			emailPlaceholder?: string;
			subscribeButtonText?: string;
		};
		glossaryCard?: GlossaryCardType;

		meta?: {
			title?: string;
			description?: string;
			image?: string;
		};
	};
};

export type Category = {
	name?: string;
	slug?: string;
};

export type MediaPageData = {
	categories?: Array<Category>;
	articles?: Array<Article>;
};

export type MediaPagePropsData = {
	initialMediaData?: MediaPageProps;
};
