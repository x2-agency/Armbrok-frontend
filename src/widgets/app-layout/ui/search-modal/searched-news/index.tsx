import type { SearchDataItem } from '@/widgets/app-layout/types/armbrok-search.types';
import { NewsItem } from '@/widgets/app-layout/ui/search-modal/news-item';

import css from './index.module.css';

type SearchedNewsProps = {
	news?: Array<SearchDataItem>;
};

export const SearchedNews = ({ news }: SearchedNewsProps) => {
	if (!news || news.length === 0) {
		return null;
	}

	return (
		<div className={css.root}>
			<ul className={css.newsList}>
				{news.map((item, index) => (
					<li key={index} className={css.listItem}>
						<NewsItem {...item} />
					</li>
				))}
			</ul>
		</div>
	);
};
