'use client';

import cx from 'clsx';
import parser from 'html-react-parser';

import { Link } from '@/i18n/navigation';
import type { InternalLinkType } from '@/widgets/internal-rules';

import css from './index.module.css';

export type ButtonPageType = {
	links?: Array<InternalLinkType>;
};

export const ButtonPage = ({ links }: ButtonPageType) => {
	if (!links?.length) return null;

	return (
		<ul className={css.root}>
			{links.map((item, index) => (
				<li key={index} className={cx(css.listItem, 'p-32')}>
					<article className={css.wrap}>
						<p className={css.title}>{parser(item?.text ?? 'title')}</p>
						<Link
							href={`/regulation/${item.link ?? '#'}`}
							className={css.link}
						/>
					</article>
				</li>
			))}
		</ul>
	);
};
