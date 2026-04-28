'use client';

import parser from 'html-react-parser';

import { Link } from '@/i18n/navigation';
import { Button } from '@/shared/ui/button';
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
				<li key={index} className={css.listItem}>
					<p className={css.title}>{parser(item?.text ?? 'title')}</p>
					<Button
						variant="next"
						iconRotate={180}
						className={css.button}
					/>
					<Link
						href={`/regulation/${item.link ?? '#'}`}
						className={css.link}
					/>
				</li>
			))}
		</ul>
	);
};
