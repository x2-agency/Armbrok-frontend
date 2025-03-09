import cx from 'clsx';
import type { Key } from 'react';

import { NewsCard } from '@/entities/news-card';
import type { Article } from '@/shared/types/article';
import { LoadNext } from '@/shared/ui/load-next';

import css from './index.module.css';

export const NewsPage = ({
	newsCard,
	className,
	hasNextPage,
	fetchNextPage,
	isFetchingNextPage,
	animationKey,
}: {
	newsCard?: Array<Article | undefined>;
	className?: string;
	hasNextPage?: boolean;
	fetchNextPage: () => void;
	isFetchingNextPage: boolean;
	animationKey?: Key;
}) => {
	return (
		<div className={css.root}>
			<div className={cx(css.news, className)}>
				{newsCard?.map((news, index) => (
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
		</div>
	);
};
