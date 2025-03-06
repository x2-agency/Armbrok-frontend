/* eslint-disable @next/next/no-img-element */
import parser from 'html-react-parser';

import { Link } from '@/i18n/navigation';
import NotSearchedIcon from '@/public/assets/icons/news-not-searched-icon.svg';
import type { SearchDataItem } from '@/view/armbrok-search/types/armbrok-search.types';

import css from './index.module.css';

export const NewsItem = ({
	link,
	htmlSnippet,
	pagemap,
	htmlTitle,
}: SearchDataItem) => {
	return (
		<article className={css.root}>
			<header className={css.header}>
				<div className={css.imageWrapper}>
					{pagemap?.cse_image?.[0]?.src ? (
						<img src={pagemap.cse_image[0].src} className={css.icon} />
					) : (
						<NotSearchedIcon className={css.icon} />
					)}
				</div>
				<p className={css.displayedLink}>{parser(link)}</p>
			</header>
			<h4 className={css.title}>
				<Link href={link} className={css.link} target="_blank">
					{parser(htmlTitle)}
				</Link>
			</h4>
			<p>{parser(htmlSnippet)}</p>
		</article>
	);
};
