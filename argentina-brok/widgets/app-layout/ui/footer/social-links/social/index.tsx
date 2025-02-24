/* eslint-disable @next/next/no-img-element */
import cx from 'clsx';

import type { AppStoreLogosType } from '@/view/brokerage/types/response';

import css from './index.module.css';

export type SocialType = {
	appStoreLogos?: Array<AppStoreLogosType>;
	className: string;
};

export const Social = ({ appStoreLogos, className }: SocialType) => {
	return (
		<div className={cx(css.root, className)}>
			{appStoreLogos?.map((link, index) => (
				<a className={css.link} href="#" key={index}>
					<img
						className={cx(css.icon, className)}
						src={link.url}
						alt="icon media"
					/>
				</a>
			))}
		</div>
	);
};
