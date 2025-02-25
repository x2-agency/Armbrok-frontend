import type { Article, AuthorType } from './article';

export interface Image {
	name: string;
	alternativeText: string | null;
	formats: {
		small?: ImageFormat;
		medium?: ImageFormat;
		thumbnail?: ImageFormat;
	};
	url?: string;
}

export interface ImageFormat {
	url: string;
	name: string;
}
export interface Category {
	name: string;
	locale: string;
}

export interface LatestNewsSection {
	id: number;
	title: string;
	description: string;
	articles: Array<Article>;
}

export interface Data {
	id: number;
	title: string;
	description: string;
	slug: string;
	locale: string;
	publishDate: string;
	readTimeInMinutes: number;
	markup: string;
	category: Category;
	author: AuthorType;
	poster: Image;
	latestNewsSection: LatestNewsSection;
}

export interface BlogPageResponse {
	data: Data;
	meta: Record<string, unknown>;
}
