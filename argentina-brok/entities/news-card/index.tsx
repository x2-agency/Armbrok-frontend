/* eslint-disable @next/next/no-img-element */
'use client';

import cx from 'clsx';
import { motion } from 'framer-motion';
import parser from 'html-react-parser';
import type { Key } from 'react';

import { Link, usePathname } from '@/i18n/navigation';
import { GRID_ANIMATION } from '@/shared/model/animation-grid';
import type { Article } from '@/shared/types/article';

import css from './index.module.css';

export type NewsCardProps = {
	data?: Article;
	className: string;
	animationKey?: Key;
};

export const NewsCard = ({ data, className, animationKey }: NewsCardProps) => {
	const pathname = usePathname();

	const isArmbrokMedia = pathname === `/media`;
	const isHomePage = pathname === `/`;

	const isMediaSlug = pathname.startsWith(`/media`);
	const { hidden, visible, transition } = GRID_ANIMATION;
	const { publishDate, title, description, author, category, poster, slug } =
		data ?? {};

	const formattedDate = new Intl.DateTimeFormat('ru-RU', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	}).format(new Date(publishDate ?? ''));

	const truncatedDescription =
		(isMediaSlug || isHomePage) && description
			? `${description.slice(0, 180)}...`
			: description;

	return (
		<motion.article
			className={cx(css.root, className, {
				[css.armbrokMediaRoot]: isArmbrokMedia,
			})}
			key={animationKey}
			initial={hidden}
			animate={visible}
			transition={transition}
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
		</motion.article>
	);
};
