export interface Category {
	id: number;
	name: string;
}

export interface Poster {
	alternativeText: string | null;
	formats: {
		small: {
			url: string;
			name: string;
		};
		medium: {
			url: string;
			name: string;
		};
		thumbnail: {
			url: string;
			name: string;
		};
	};
	url: string;
}

export interface AuthorType {
	id?: number;
	name?: string;
	avatar?: {
		alternativeText?: string | null;
		formats?: null;
		url?: string;
	};
	position?: string;
	email?: string;
	publishDate?: string;
}

export interface Article {
	title: string;
	slug: string;
	publishDate: string;
	description: string;
	markup: string;
	readTimeInMinutes: number;
	category: Category;
	poster: Poster | null;
	author: AuthorType;
}

export interface ArticleData {
	title?: string;
	// moreButton?: { text: string; link: string };
	data: Array<Article>;
}

export interface BlogData {
	data: Array<Article>;
}

export interface PaginationMeta {
	pagination: {
		page: number;
		pageCount: number;
		total: number;
	};
}

export interface GetArticlesResponse {
	initialData: Array<Article>;
	meta?: PaginationMeta;
}

export interface ArticleSlug {
	data?: Article;
}
