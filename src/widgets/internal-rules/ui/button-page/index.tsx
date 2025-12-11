'use client';

import cx from 'clsx';
import parser from 'html-react-parser';
import Link from 'next/link';

import css from './index.module.css';

export type ButtonPageType = {
	text?: Array<{ value: string; title?: string }>;
};

export const ButtonPage = ({ text }: ButtonPageType) => {
	if (!text?.length) return null;

	return (
		<ul className={css.root}>
			{text.map((item, index) => (
				<li key={index} className={cx(css.listItem, 'p-32')}>
					<article className={css.wrap}>
						<p className={css.title}>{parser(item?.title ?? 'title')}</p>

						<Link href={`/regulation/${item.value}`} className={css.link} />
					</article>
				</li>
			))}
		</ul>
	);
};
