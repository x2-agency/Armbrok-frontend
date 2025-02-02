/* eslint-disable @next/next/no-img-element */
import cx from 'clsx';
import parser from 'html-react-parser';

import type { BannerHeadProps } from '@/widgets/banner/banner.types';
import { BackButton } from '../back-button';

import css from './index.module.css';

export const BannerHead = ({
	title,
	description,
	established,
	icon,
	className,
	withBackButton,
}: BannerHeadProps) => {
	return (
		<section className={cx(css.root, className)}>
			{withBackButton && <BackButton>Back</BackButton>}
			{established && (
				<div className={css.established}>{parser(established)}</div>
			)}
			<h1 className={css.title}>{parser(title)}</h1>
			<p className={css.description}>{parser(description)}</p>
			{icon && <img src={icon} alt="Icon" />}
		</section>
	);
};
