'use client';

/* eslint-disable @next/next/no-img-element */
import parser from 'html-react-parser';
import type { NextPage } from 'next';

import type { Data } from '@/shared/types/blog';
import ContentMarkup from '@/shared/ui/content-markup';
import { NewsSectionHome } from '@/widgets/news-section';

import css from './index.module.css';

export const Blog: NextPage<{
	initialBlogPage: Data;
}> = initialData => {
	const { title, description, poster, markup, latestNewsSection } =
		initialData.initialBlogPage ?? {};
	return (
		<>
			<div className={css.wrap}>
				<h1 className={css.title}>{parser(title)}</h1>
				<p className={css.description}>{parser(description)}</p>

				{/* <Author data={[initialData.initialBlogPage.data.author]} /> */}
			</div>
			{poster?.url && (
				<div className={css.imageWrap}>
					<img className={css.img} src={poster?.url} />
				</div>
			)}

			<article className={css.root}>
				<ContentMarkup extraClass={css.markup} html={markup}></ContentMarkup>
			</article>
			{/* <Author data={[initialData.initialBlogPage.data.author]} /> */}
			<NewsSectionHome data={latestNewsSection} />
		</>
	);
};
