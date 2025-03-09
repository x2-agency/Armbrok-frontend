/* eslint-disable @next/next/no-img-element */
'use client';

import cx from 'clsx';
import parser from 'html-react-parser';
import { useEffect, useState } from 'react';

import { Link, usePathname } from '@/i18n/navigation';
import type { Article } from '@/shared/types/article';

import css from './index.module.css';

export type NewsCardProps = {
	data?: Article;
	className: string;
};

export const NewsCard = ({ data, className }: NewsCardProps) => {
	const pathname = usePathname();

	const isArmbrokMedia = pathname === `/media`;
	const isHomePage = pathname === `/`;

	const isMediaSlug = pathname.startsWith(`/media`);

	const { publishDate, title, description, author, category, poster, slug } =
		data ?? {};

	// Форматируем дату
	const [formattedDate, setFormattedDate] = useState('');

	useEffect(() => {
		if (publishDate) {
			const date = new Date(publishDate);
			const formatted = new Intl.DateTimeFormat('en-GB').format(date);
			setFormattedDate(formatted);
		}
	}, [publishDate]);

	const truncatedDescription =
		(isMediaSlug || isHomePage) && description
			? `${description.slice(0, 253)}...`
			: description;

	return (
		<article
			className={cx(css.root, className, {
				[css.armbrokMediaRoot]: isArmbrokMedia,
			})}
		>
			{poster && isArmbrokMedia && (
				<img src={poster.url} className={css.poster} />
			)}
			<div className={css.textWrap}>
				<time className={css.time}>{formattedDate ?? ''}</time>
				<h5
					className={cx(css.title, { [css.armbrokMediaTitle]: isArmbrokMedia })}
				>
					{parser(title ?? '')}
				</h5>
				<p className={css.description}>{parser(truncatedDescription ?? '')}</p>
				<div className={css.wrap}>
					<div className={css.authorWrap}>
						<div className={css.imgWrap}>
							<img
								className={css.avatar}
								src={author?.avatar?.url ?? ''}
								alt={author?.avatar?.alternativeText ?? ''}
							/>
						</div>
						<span className={css.name}>{parser(author?.fullName ?? '')}</span>
					</div>

					{category && <p className={css.tag}>{category?.name}</p>}
				</div>
			</div>
			<Link className={css.link} href={`/media/${slug}`} />
		</article>
	);
};
