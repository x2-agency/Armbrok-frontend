'use client';

/* eslint-disable @next/next/no-img-element */
import parser from 'html-react-parser';
import type { NextPage } from 'next';

import type { BlogPageResponse } from '@/shared/types/blog';
import ContentMarkup from '@/shared/ui/content-markup';

import css from './index.module.css';

export const Blog: NextPage<{
	initialBlogPage: BlogPageResponse;
}> = initialData => {
	return (
		<>
			<div className={css.wrap}>
				<h1 className={css.title}>
					{parser(initialData.initialBlogPage.data.title)}
				</h1>
				<p className={css.description}>
					{parser(initialData.initialBlogPage.data.description)}
				</p>

				{/* <Author data={initialData.initialAuthor.data} /> */}
			</div>
			<div className={css.imageWrap}>
				<img
					className={css.img}
					src={initialData.initialBlogPage.data.poster.url}
				/>
			</div>
			<article className={css.root}>
				<ContentMarkup
					extraClass={css.markup}
					html={initialData.initialBlogPage.data.markup}
				></ContentMarkup>
			</article>
			{/* <Author data={initialData.initialAuthor.data} /> */}
			{/* <NewsSectionHome
				className={css.news}
				title={LAST_MEDIA_DATA.title}
				description={LAST_MEDIA_DATA.description}
				dataNews={initialData.initialBlogPage.data.latestNewsSection.articles}
			/> */}
		</>
	);
};
