/* eslint-disable @next/next/no-img-element */

import cx from 'clsx';

import { Link } from '@/i18n/navigation';
import type { SocialMediasType } from '@/shared/types/article';

import css from './index.module.css';

export type SocialProps = {
	social?: Array<SocialMediasType>;
	className?: string;
};

export const Social = ({ social, className }: SocialProps) => {
	return (
		<div className={cx(css.root, className)}>
			{social?.map((item, index) => (
				<div key={index} className={css.wrap}>
					<img
						className={css.img}
						src={item.icon?.url ?? ''}
						alt={item.icon?.alternativeText}
					/>
					<Link className={css.link} href={item.link ?? ''} />
				</div>
			))}
		</div>
	);
};
