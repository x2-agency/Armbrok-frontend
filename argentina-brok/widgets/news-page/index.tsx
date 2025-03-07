import cx from 'clsx';

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
}: {
	newsCard?: Array<Article | undefined>;
	className?: string;
	hasNextPage?: boolean;
	fetchNextPage: () => void;
	isFetchingNextPage: boolean;
}) => {
	return (
		<div className={css.root}>
			<div className={cx(css.news, className)}>
				{newsCard?.map((news, index) => (
					<NewsCard className={css.card} key={index} data={news} />
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
