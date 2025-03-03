/* eslint-disable @next/next/no-img-element */
'use client';

import cx from 'clsx';
import parser from 'html-react-parser';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import type { Article } from '@/shared/types/article';

import css from './index.module.css';

export type NewsCardProps = {
	data: Article;
	className: string;
};

export const NewsCard = ({ data, className }: NewsCardProps) => {
	const pathname = usePathname();
	const locale = pathname.split('/')[1];

	const isArmbrokMedia = pathname === `/${locale}/media`;

	const { publishDate, title, description, author, category, poster, slug } =
		data;

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
				<time className={css.time}>{publishDate}</time>
				<h5
					className={cx(css.title, { [css.armbrokMediaTitle]: isArmbrokMedia })}
				>
					{parser(title ?? '')}
				</h5>
				<p className={css.description}>{parser(description ?? '')}</p>
				<div className={css.wrap}>
					<div className={css.authorWrap}>
						<div className={css.imgWrap}>
							<img
								className={css.avatar}
								src={author.avatar?.url ?? ''}
								alt={author.avatar?.alternativeText ?? ''}
							/>
						</div>
						<span className={css.name}>{parser(author.fullName ?? '')}</span>
					</div>

					{category && <p className={css.tag}>{category?.name}</p>}
				</div>
			</div>
			<Link className={css.link} href={`/ru/media/${slug}`} />
		</article>
	);
};
