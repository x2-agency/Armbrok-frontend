/* eslint-disable @next/next/no-img-element */
'use client';

import cx from 'clsx';
import parser from 'html-react-parser';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import type { NewsType } from '@/shared/types/global.types';

import css from './index.module.css';

export type NewsCard = {
	data: NewsType;
	className: string;
};

export const NewsCard = ({ data, className }: NewsCard) => {
	const pathname = usePathname();
	const isArmbrokMedia = pathname === '/armbrok-media';
	const { publishDate, title, description, author, category, poster } = data;
	return (
		<article
			className={cx(css.root, className, {
				[css.armbrokMediaRoot]: isArmbrokMedia,
			})}
		>
			{poster && isArmbrokMedia && (
				<img
					src={poster.url}
					alt={poster.alternativeText}
					className={css.poster}
				/>
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
							<img className={css.avatar} src={author?.avatar ?? ''} alt="" />
						</div>
						<span className={css.name}>{parser(author?.name ?? '')}</span>
					</div>

					<p className={css.tag}>{category}</p>
				</div>
			</div>
			<Link className={css.link} href={`/armbrok-media/article`} />
		</article>
	);
};
