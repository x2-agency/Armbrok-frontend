/* eslint-disable @next/next/no-img-element */
import parser from 'html-react-parser';
import Link from 'next/link';

import css from './index.module.css';

import type { SearchDataItem } from '@/view/armbrok-search/types/armbrok-search.types';

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
					{/* {pagemap.case_image?[0].src && <img src={pagemap.case_image[0].src} />} */}
				</div>
				<p className={css.displayedLink}>{parser(link)}</p>
			</header>
			<h4 className={css.title}>
				<Link href={link}>{parser(htmlTitle)}</Link>
			</h4>
			<p>{parser(htmlSnippet)}</p>
		</article>
	);
};
