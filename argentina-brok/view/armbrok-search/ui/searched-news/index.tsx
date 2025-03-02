import { Container } from '@/shared/ui/container';
import type { SearchDataItem } from '@/view/armbrok-search/types/armbrok-search.types';

import css from './index.module.css';
import { NewsItem } from './news-item';

type SearchedNewsProps = {
	news?: Array<SearchDataItem>;
};

export const SearchedNews = ({ news }: SearchedNewsProps) => {
	if (!news || news.length === 0) {
		return null;
	}

	return (
		<Container className={css.root}>
			<ul className={css.newsList}>
				{news.map((item, index) => (
					<li key={index} className={css.listItem}>
						<NewsItem {...item} />
					</li>
				))}
			</ul>
		</Container>
	);
};
