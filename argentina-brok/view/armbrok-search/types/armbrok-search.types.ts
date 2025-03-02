import type { ItemDetail } from '@/shared/types/global.types';

export type ArmbrokSearchPageResponse = ItemDetail & {
	inputPlaceholder?: string;
	searchButtonText?: string;
};

export type SearchDataItem = {
	kind: string;
	title: string;
	htmlTitle: string;
	link: string;
	displayLink: string;
	snippet: string;
	htmlSnippet: string;
	formattedUrl: string;
	htmlFormattedUrl: string;
	pagemap: {
		cse_image: Array<{ src: string }>;
	};
};
