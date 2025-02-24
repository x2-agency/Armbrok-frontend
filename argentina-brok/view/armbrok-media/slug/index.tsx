'use client';

/* eslint-disable @next/next/no-img-element */
import parser from 'html-react-parser';
import type { NextPage } from 'next';

import type { BlogData } from '@/shared/types/article';
import type { MediaData } from '@/shared/types/global.types';
import ContentMarkup from '@/shared/ui/content-markup';
import { LAST_MEDIA_DATA } from '@/view/armbrok-media/model/armbrok-media.constants';
import { NewsSectionHome } from '@/widgets/news-section';

import css from './index.module.css';
import { Author, type AuthorData } from './ui/author';

export type BlogType = {
	data: {
		title: string;
		description: string;
	};
	image: MediaData;
};

export const Blog: NextPage<{
	initialBlogPage: BlogData;
	initialAuthor: AuthorData;
}> = initialData => {
	return (
		<>
			<div className={css.wrap}>
				<h1 className={css.title}>
					{parser(initialData.initialBlogPage.data[1].title)}
				</h1>
				<p className={css.description}>
					{parser(initialData.initialBlogPage.data[1].description)}
				</p>

				<Author data={initialData.initialAuthor.data} />
			</div>
			<div className={css.imageWrap}>
				<img
					className={css.img}
					src={initialData.initialBlogPage.data[1].poster?.formats.medium.url}
				/>
			</div>
			<article className={css.root}>
				<ContentMarkup
					extraClass={css.markup}
					html={initialData.initialBlogPage.data[1].markup}
				></ContentMarkup>
			</article>
			{/* <Author data={initialData.initialAuthor.data} /> */}
			<NewsSectionHome
				className={css.news}
				title={LAST_MEDIA_DATA.title}
				description={LAST_MEDIA_DATA.description}
				dataNews={initialData.initialBlogPage}
			/>
		</>
	);
};
