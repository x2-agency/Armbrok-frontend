/* eslint-disable @next/next/no-img-element */
import cx from 'clsx';

import type { IconListProps } from '@/widgets/app-layout/models/social.constants';

import css from './index.module.css';

export const Link = ({ items, className }: IconListProps) => {
	return (
		<div className={cx(css.root, className)}>
			{items.map((link, index) => (
				<a className={css.link} href={link.href} key={index}>
					<img
						className={cx(css.icon, className)}
						src={link.src}
						alt="icon media"
						width={link.width}
					/>
				</a>
			))}
		</div>
	);
};
