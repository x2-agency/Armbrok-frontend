/* eslint-disable @next/next/no-img-element */
import cx from 'clsx';
import parser from 'html-react-parser';
import Link from 'next/link';

import type { Instruments } from '@/shared/types/global.types';

import css from './index.module.css';

export const Card = ({ title, media }: Instruments) => {
	return (
		<article className={cx(css.root, 'p-32')}>
			{media?.url && (
				<img
					className={css.icon}
					src={media?.url}
					alt="{media?.alternativeText}"
				/>
			)}
			{title && <p className={css.description}>{parser(title)}</p>}
			<Link href="#" className={css.link} />
		</article>
	);
};
