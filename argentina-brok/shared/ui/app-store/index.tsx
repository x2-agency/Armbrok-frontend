/* eslint-disable @next/next/no-img-element */
import cx from 'clsx';
import Link from 'next/link';

import type { BrokerageAppCardProps } from '@/view/home/types/response';

import css from './index.module.css';
export type AppStoreProps = {
	data?: BrokerageAppCardProps;
	className?: string;
};

export const AppStore = ({ data, className }: AppStoreProps) => {
	const { appStoreLogos } = data ?? {};
	return (
		<div className={cx(css.root, className)}>
			{appStoreLogos?.map((link, index) => (
				<Link
					className={css.link}
					key={index}
					target="_blank"
					href={link.url || '#'}
				>
					<img className={css.svg} src={link.media?.url} />
				</Link>
			))}
		</div>
	);
};
