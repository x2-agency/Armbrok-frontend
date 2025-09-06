import type { ItemDetail, ParentFundProps } from '@/shared/types/global.types';

export type ArmbrokSearchPageResponse = ItemDetail & {
	inputPlaceholder?: string;
	searchButtonText?: string;
	parentFunds?: Array<ParentFundProps>;
};

export type SearchDataItem = {
	htmlTitle: string;
	link: string;
	htmlSnippet: string;
};
