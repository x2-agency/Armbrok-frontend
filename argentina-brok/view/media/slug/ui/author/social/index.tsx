/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';

import type { SocialMediasType } from '@/shared/types/article';

import css from './index.module.css';

export type SocialProps = {
	social?: Array<SocialMediasType>;
};

export const Social = ({ social }: SocialProps) => {
	return (
		<div className={css.root}>
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
