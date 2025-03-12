'use client';

/* eslint-disable @next/next/no-img-element */
import parser from 'html-react-parser';
import type { NextPage } from 'next';

import type { Data } from '@/shared/types/blog';
import ContentMarkup from '@/shared/ui/content-markup';
import { useFormattedDate } from '@/widgets/app-layout/hooks/use-formated-date';
import { NewsSectionHome } from '@/widgets/news-section';

import css from './index.module.css';
import { Author } from './ui/author';
import { Breadcrumbs } from './ui/author/bread-crumbs';

export const Blog: NextPage<{
	initialBlogPage: Data;
}> = initialData => {
	const {
		title,
		description,
		poster,
		markup,
		latestNewsSection,
		author,
		publishDate,
		category,
	} = initialData.initialBlogPage ?? {};

	const formattedDate = useFormattedDate(publishDate ?? '', true, true);
	return (
		<>
			<div className={css.wrap}>
				<Breadcrumbs title={title} category={category ?? {}} />
				<h1 className={css.title}>{parser(title ?? '')}</h1>
				<p className={css.description}>{parser(description)}</p>

				<Author data={author} publishDate={formattedDate ?? ''} />
			</div>
			{poster?.url && (
				<div className={css.imageWrap}>
					<img className={css.img} src={poster?.url} />
				</div>
			)}

			<article className={css.root}>
				<ContentMarkup extraClass={css.markup} html={markup} />
			</article>
			<Author className={css.authorBottom} data={author} visivleSocial />
			<NewsSectionHome
				data={{
					news: latestNewsSection.articles,
					title: latestNewsSection.title,
					description: latestNewsSection.description,
				}}
			/>
		</>
	);
};
