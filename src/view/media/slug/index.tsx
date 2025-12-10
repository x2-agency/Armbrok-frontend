'use client';

/* eslint-disable @next/next/no-img-element */
import parser from 'html-react-parser';
import type { NextPage } from 'next';

import { useAppendToHeaderFunds } from '@/shared/hooks/use-append-to-header-funds';
import useMediaQuery from '@/shared/hooks/use-media-query';
import type { Data } from '@/shared/types/blog';
import type { ParentFundProps } from '@/shared/types/global.types';
import ContentMarkup from '@/shared/ui/content-markup';
import { useFormattedDate } from '@/widgets/app-layout/hooks/use-formated-date';
import { NewsSectionHome } from '@/widgets/news-section';

import css from './index.module.css';
import { Author } from './ui/author';
import { Breadcrumbs } from './ui/author/bread-crumbs';

export const Blog: NextPage<{
	initialBlogPage: Data;
	parentFunds?: Array<ParentFundProps>;
}> = ({ initialBlogPage, parentFunds }) => {
	const {
		title,
		description,
		poster,
		markup,
		latestNewsSection = null,
		author,
		publishDate,
		category,
		readTimeInMinutes
	} = initialBlogPage ?? {};

	const isMobile = useMediaQuery('(max-width: 767px)');
	useAppendToHeaderFunds({ funds: parentFunds });

	const formattedDate = useFormattedDate(publishDate ?? '', {
		readTimeInMinutes,
		useAlternateFormat: true,
	});

	const abbreviatedText = title?.slice(0, 24) + `...`;

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
					<img loading="lazy" className={css.img} src={poster?.url} alt={poster?.alternativeText ?? ''} />
				</div>
			)}

			<article className={css.root}>
				<ContentMarkup extraClass={css.markup} html={markup} />
			</article>

			<Author className={css.authorBottom} data={author} visibleSocial />
			
			{
				latestNewsSection &&
				<NewsSectionHome
					className={css.news}
					data={{
						news: latestNewsSection.articles,
						title: latestNewsSection.title,
						description: latestNewsSection.description,
					}}
				/>
			}
		</>
	);
};
