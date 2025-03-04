/* eslint-disable @next/next/no-img-element */
import cx from 'clsx';

import { Link } from '@/i18n/navigation';
import type { AppStoreLogosType } from '@/view/home/types/response';

import css from './index.module.css';

export type SocialType = {
	appStoreLogos?: Array<AppStoreLogosType>;
	className: string;
};

export const Social = ({ appStoreLogos, className }: SocialType) => {
	return (
		<div className={cx(css.root, className)}>
			{appStoreLogos?.map((link, index) => (
				<Link className={css.link} href={link.url} key={index}>
					<img
						key={index}
						className={cx(css.icon, className)}
						src={link.media.url}
						alt={link.alternativeText}
					/>
				</Link>
			))}
		</div>
	);
};
