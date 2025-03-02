import type { FormatsType } from '@/view/home/types/response';

import type { Category } from './media-page';

export interface Poster {
	alternativeText: string;
	formats: FormatsType;
	url: string;
}

export interface AuthorType {
	id?: number;
	name?: string;
	fullName?: string;
	XLink?: string;
	facebookLink?: string;
	linkedInLink?: string;
	position?: string;
	avatar?: {
		alternativeText?: string;
		formats?: null;
		url?: string;
	};
	email?: string;
	publishDate?: string;
}

export interface Article {
	slug: string;
	title: string;
	publishDate: string;
	description: string;
	markup: string;
	poster: Poster | null;
	author: AuthorType;
	category: Category;
}

export interface ArticleData {
	title?: string;
	data: Array<Article>;
}

export interface BlogData {
	data: Array<Article>;
}

export interface PaginationMeta {
	pagination: {
		page?: number | null;
		pageCount: number;
		total: number;
	};
}

export interface GetArticlesResponse {
	articles: Array<Article>;
	meta?: PaginationMeta;
}

export interface ArticleSlug {
	data?: Article;
}

export interface ArticlesData {
	data?: Array<Article>;
	categories?: Array<Category>;
	meta?: PaginationMeta;
}

export type InfiniteQueryPage<T> = {
	pageParams: Array<number>;
	pages: Array<T>;
};
