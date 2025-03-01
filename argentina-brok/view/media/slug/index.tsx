'use client';

/* eslint-disable @next/next/no-img-element */
import parser from 'html-react-parser';
import type { NextPage } from 'next';

import type { BlogPageResponse } from '@/shared/types/blog';
import ContentMarkup from '@/shared/ui/content-markup';
import { NewsSectionHome } from '@/widgets/news-section';

import css from './index.module.css';

export const Blog: NextPage<{
	initialBlogPage: BlogPageResponse;
}> = initialData => {
	return (
		<>
			<div className={css.wrap}>
				<h1 className={css.title}>
					{parser(initialData.initialBlogPage.data.slug)}
				</h1>
				<p className={css.description}>
					{parser(initialData.initialBlogPage.data.description)}
				</p>

				{/* <Author data={[initialData.initialBlogPage.data.author]} /> */}
			</div>
			{initialData?.initialBlogPage?.data?.poster?.url && (
				<div className={css.imageWrap}>
					<img
						className={css.img}
						src={initialData?.initialBlogPage?.data?.poster?.url}
					/>
				</div>
			)}

			<article className={css.root}>
				<ContentMarkup
					extraClass={css.markup}
					html={initialData.initialBlogPage.data.markup}
				></ContentMarkup>
			</article>
			{/* <Author data={[initialData.initialBlogPage.data.author]} /> */}
			<NewsSectionHome
				className={css.news}
				title={initialData.initialBlogPage.data.latestNewsSection.title}
				description={
					initialData.initialBlogPage.data.latestNewsSection.description
				}
				dataNews={{
					data: initialData.initialBlogPage.data.latestNewsSection.articles,
				}}
			/>
		</>
	);
};
