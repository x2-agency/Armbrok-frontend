/* eslint-disable @next/next/no-img-element */
import parser from 'html-react-parser';

import type { AuthorType } from '@/shared/types/article';

import css from './index.module.css';

export type AuthorData = {
	data: Array<AuthorType>;
};
export const Author = ({ data }: AuthorData) => {
	console.log(data);
	return (
		<div className={css.root}>
			<div className={css.avatar}>
				<img className={css.img} src={data[0].avatar?.url} alt="image author" />
			</div>
			<div className={css.textContent}>
				<p className={css.name}>{parser(data[0].name ?? '')}</p>
				<p className={css.position}>{parser(data[0].position ?? '')}</p>
			</div>
			<time className={css.date}>{data[0].publishDate} </time>
		</div>
	);
};
