import cx from 'clsx';

import { NewsCard } from '@/entities/news-card';
import type { NewsType } from '@/entities/news-card/types';

import css from './index.module.css';

export type NewsSliderProps = {
	newsSlider: Array<NewsType>;
	className: string;
};

export const NewsSlider = ({ newsSlider, className }: NewsSliderProps) => {
	return (
		<div className={cx(css.root, className)}>
			{newsSlider.map(news => (
				<NewsCard className={css.card} key={news.id} data={news} />
			))}
		</div>
	);
};
