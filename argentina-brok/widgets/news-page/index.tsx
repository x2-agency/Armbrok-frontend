import cx from 'clsx';
import { motion } from 'framer-motion';
import parser from 'html-react-parser';
import { useTranslations } from 'next-intl';
import { type Key } from 'react';

import { NewsCard } from '@/entities/news-card';
import { LOCALE_KEYS } from '@/i18n/locale-keys';
import { GRID_ANIMATION } from '@/shared/model/animation-grid';
import type { Article } from '@/shared/types/article';
import { LoadNext } from '@/shared/ui/load-next';

import css from './index.module.css';

export const NewsPage = ({
	newsCard = [],
	className,
	hasNextPage,
	fetchNextPage,
	isFetchingNextPage,
	animationKey,
	isNoNews = false,
}: {
	newsCard?: Array<Article | undefined>;
	className?: string;
	hasNextPage?: boolean;
	fetchNextPage: () => void;
	isFetchingNextPage: boolean;
	animationKey?: Key;
	isNoNews?: boolean;
}) => {
	const { media } = LOCALE_KEYS;
	const t = useTranslations(media.root);

	const sortedNewsSlider = (newsCard || [])
		.filter((news): news is Article => news !== undefined)
		.sort((a, b) => {
			const dateA = new Date(a.publishDate).getTime();
			const dateB = new Date(b.publishDate).getTime();
			return dateB - dateA;
		});

	console.log(media);

	return (
		<div className={css.root}>
			{isNoNews ? (
				<motion.div
					initial={GRID_ANIMATION.hidden}
					animate={GRID_ANIMATION.visible}
					transition={GRID_ANIMATION.transition}
					className={css.noNews}
				>
					{parser(t(media.noNews))}
				</motion.div>
			) : (
				<>
					<div className={cx(css.news, className)}>
						{sortedNewsSlider?.map((news, index) => (
							<NewsCard
								className={css.card}
								key={index}
								data={news}
								animationKey={animationKey}
							/>
						))}
					</div>
					{hasNextPage && (
						<LoadNext
							className={css.spacing}
							fetchNextPage={fetchNextPage}
							isFetching={isFetchingNextPage}
							hasNextPage={hasNextPage}
						/>
					)}
				</>
			)}
		</div>
	);
};
