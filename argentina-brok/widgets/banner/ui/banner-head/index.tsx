/* eslint-disable @next/next/no-img-element */
import cx from 'clsx';
import parser from 'html-react-parser';

import type { BannerHeadProps } from '@/widgets/banner/banner.types';
import { BackButton } from '@/widgets/banner/ui/back-button';

import css from './index.module.css';

export const BannerHead = ({
	title,
	description,
	established,
	icon,
	className,
	size,
}: BannerHeadProps) => {
	return (
		<header className={cx(css.root, className)}>
			{size === 'small' && <BackButton>Back</BackButton>}
			{established && (
				<div className={css.established}>{parser(established)}</div>
			)}
			<h1 className={css.title}>{parser(title)}</h1>
			<p className={css.description}>{parser(description)}</p>
			{icon && <img src={icon} alt="Icon" />}
		</header>
	);
};
