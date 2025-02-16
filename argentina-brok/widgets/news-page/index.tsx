import cx from 'clsx';

import { NewsCard } from '@/entities/news-card';
import type { NewsType } from '@/entities/news-card/types';
import { Button } from '@/shared/ui/button';

import css from './index.module.css';

export const NewsPage = ({
	newsCard,
	className,
	isHasMore,
}: {
	newsCard: Array<NewsType>;
	className?: string;
	isHasMore: boolean;
}) => {
	return (
		<div className={css.root}>
			<div className={cx(css.news, className)}>
				{newsCard.map(news => (
					<NewsCard className={css.card} key={news.id} data={news} />
				))}
			</div>
			{isHasMore && (
				<Button iconRotate={270} variant="next">
					Show more
				</Button>
			)}
		</div>
	);
};
