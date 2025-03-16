'use client';

/* eslint-disable @next/next/no-img-element */
import parser from 'html-react-parser';
import type { NextPage } from 'next';

import useMediaQuery from '@/shared/hooks/use-media-query';
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

	const isMobile = useMediaQuery('(max-width: 767px)');

	const formattedDate = useFormattedDate(publishDate ?? '', true, true);

	const abbreviatedText = title.slice(0, 24) + `...`;

	return (
		<>
			<div className={css.wrap}>
				<Breadcrumbs
					title={isMobile ? abbreviatedText : title}
					category={category ?? {}}
				/>
				<h1 className={css.title}>{parser(title ?? '')}</h1>
				<p className={css.description}>{parser(description ?? '')}</p>

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
				className={css.news}
				data={{
					news: latestNewsSection.articles,
					title: latestNewsSection.title,
					description: latestNewsSection.description,
				}}
			/>
		</>
	);
};
