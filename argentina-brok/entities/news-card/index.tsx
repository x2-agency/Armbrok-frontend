/* eslint-disable @next/next/no-img-element */
import cx from 'clsx';
import parser from 'html-react-parser';

import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import type { NewsProps } from './types';

export const NewsCard = ({ data, className }: NewsProps) => {
	const { piblishDate, title, description, author, category } = data;
	return (
		<Container
			category="article"
			padding="min"
			className={cx(css.root, className)}
		>
			<time className={css.time}>{piblishDate}</time>
			<h5 className={css.title}>{parser(title)}</h5>
			<p className={css.description}>{parser(description)}</p>
			<div className={css.wrap}>
				<div className={css.authorWrap}>
					<div className={css.imgWrap}>
						<img className={css.avatar} src={author.avatar} alt="" />
					</div>
					<span className={css.name}>{parser(author.name)}</span>
				</div>

				<p className={css.tag}>{category}</p>
			</div>
		</Container>
	);
};
