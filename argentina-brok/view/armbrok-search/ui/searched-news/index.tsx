import css from './index.module.css';
import { NewsItem } from './news-item';

import type { SearchDataItem } from '@/view/armbrok-search/types/armbrok-search.types';

type SearchedNewsProps = {
	news?: Array<SearchDataItem>;
};

export const SearchedNews = ({ news }: SearchedNewsProps) => {
	if (!news || news.length === 0) {
		return null;
	}

	return (
		<section className={css.root}>
			<ul className={css.newsList}>
				{news.map((item, index) => (
					<li key={index} className={css.listItem}>
						<NewsItem {...item} />
					</li>
				))}
			</ul>
		</section>
	);
};
