import cx from 'clsx';

import { NewsCard } from '@/entities/news-card';
import type { Article } from '@/shared/types/article';

import css from './index.module.css';

export type NewsSliderProps = {
	newsSlider: Array<Article>;
	className: string;
};

export const NewsSlider = ({ newsSlider, className }: NewsSliderProps) => {
	return (
		<div className={cx(css.root, className)}>
			{newsSlider?.map((news, index) => (
				<NewsCard className={css.card} key={index} data={news} />
			))}
		</div>
	);
};
