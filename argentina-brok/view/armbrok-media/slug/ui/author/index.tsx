/* eslint-disable @next/next/no-img-element */
import parser from 'html-react-parser';

import css from './index.module.css';
export type AuthorType = {
	author: {
		name: string;
		avatar: string;
		position: string;
		date: string;
	};
};

export const Author = ({ author }: AuthorType) => {
	return (
		<div className={css.root}>
			<div className={css.avatar}>
				<img className={css.img} src={author.avatar} alt="image author" />
			</div>
			<div className={css.textContent}>
				<p className={css.name}>{parser(author.name)}</p>
				<p className={css.position}>{parser(author.position)}</p>
			</div>
			<time className={css.date}>{author.date} </time>
		</div>
	);
};
