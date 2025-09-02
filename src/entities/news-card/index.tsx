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
		description && description.length > 200
			? `${description.slice(0, 200)}...`
			: description;

	const mediaDescription =
		description && description.length > 250
			? `${description.slice(0, 250)}...`
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
			{poster && (
				<img
					loading="lazy"
					src={poster.url}
					className={cx(isArmbrokMedia ? css.poster : css.homePoster)}
				/>
			)}
			<div className={css.textWrap}>
				<time className={css.time}>{formattedDate ?? ''}</time>
				<header className={css.header}>
					<h5
						className={cx(css.title, {
							[css.armbrokMediaTitle]: isArmbrokMedia,
						})}
					>
						{parser(title ?? '')}
					</h5>
					<Link
						className={cx(css.linkTitle, { [css.cursor]: isMediaSlug })}
						href={`/media/${slug}`}
					/>
				</header>
				<p className={css.description}>
					{parser(
						isArmbrokMedia
							? (mediaDescription ?? '')
							: (truncatedDescription ?? '')
					)}
				</p>
			</div>

			<div className={cx(css.wrap, { [css.mediaPage]: isArmbrokMedia })}>
				<div
					className={cx(css.authorWrap, {
						[css.mediaAuthorWrap]: isArmbrokMedia,
					})}
				>
					<div className={cx(css.imgWrap)}>
						{author?.avatar?.url && (
							<img
								loading="lazy"
								className={css.avatar}
								src={author?.avatar?.url ?? ''}
							/>
						)}
					</div>
					<span className={css.name}>{parser(author?.fullName ?? '')}</span>
				</div>

				{category && <p className={css.tag}>{category?.name}</p>}
			</div>
			<Link
				className={cx(css.link, { [css.cursor]: isMediaSlug })}
				href={`/media/${slug}`}
			/>
		</motion.article>
	);
};
