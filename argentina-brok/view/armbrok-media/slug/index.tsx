/* eslint-disable @next/next/no-img-element */
import parser from 'html-react-parser';

import type { MediaData } from '@/shared/types/global.types';
import { ARTICLE_PAGE_DATA } from '@/view/armbrok-media/model/article.constants';

import css from './index.module.css';
import { Author } from './ui/author';

export type ArticleType = {
	data: {
		title: string;
		description: string;
	};
	image: MediaData;
};
export const Article = ({ data }: ArticleType) => {
	return (
		<>
			<div className={css.wrap}>
				<h1 className={css.title}>{parser(ARTICLE_PAGE_DATA.title)}</h1>
				<p className={css.description}>
					{parser(ARTICLE_PAGE_DATA.description)}
				</p>

				<Author author={ARTICLE_PAGE_DATA.author} />
			</div>
			<div className={css.imageWrap}>
				<img className={css.img} src={ARTICLE_PAGE_DATA.formats.src} />
			</div>
		</>
	);
};
