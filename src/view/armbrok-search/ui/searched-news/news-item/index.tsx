import parser from 'html-react-parser';

import { Link } from '@/i18n/navigation';
import type { SearchDataItem } from '@/view/armbrok-search/types/armbrok-search.types';

import css from './index.module.css';

export const NewsItem = ({ link, htmlSnippet, htmlTitle }: SearchDataItem) => {
	return (
		<article className={css.root}>
			<h4 className={css.title}>
				<Link href={link} className={css.link} target="_blank">
					{parser(htmlTitle)}
				</Link>
			</h4>
			<p>{parser(htmlSnippet)}</p>
		</article>
	);
};
