/* eslint-disable @next/next/no-img-element */
import cx from 'clsx';

import type { IconListProps } from '@/widgets/app-layout/ui/footer/model/social.constants';

import css from './index.module.css';
export const Link = ({ items, className }: IconListProps) => {
	return (
		<div className={cx(css.root, className)}>
			{items.map((link, index) => (
				<a className={css.link} href={link.href}>
					<img
						key={index}
						className={css.icon}
						src={link.src}
						alt="icon media"
						width={link.width}
					/>
					<a className={css.link} href={link.href} />
				</a>
			))}
		</div>
	);
};
