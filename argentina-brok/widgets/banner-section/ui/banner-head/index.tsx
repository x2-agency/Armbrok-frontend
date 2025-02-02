'use client';

/* eslint-disable @next/next/no-img-element */
import cx from 'clsx';
import parser from 'html-react-parser';
import { useRouter } from 'next/navigation';

import { Button } from '@/shared/ui/button';
import type { BannerHeadProps } from '@/widgets/banner-section/banner.types';

import css from './index.module.css';

export const BannerHead = ({
	title,
	description,
	established,
	icon,
	className,
	withBackButton,
}: BannerHeadProps) => {
	const router = useRouter();

	const handleClick = () => {
		router.back();
	};

	return (
		<section className={cx(css.root, className)}>
			{withBackButton && (
				<Button variant="back" onClick={handleClick} className={css.backButton}>
					Back
				</Button>
			)}
			{established && (
				<div className={css.established}>{parser(established)}</div>
			)}
			<h1 className={cx(css.title, { [css.withBackButton]: withBackButton })}>
				{parser(title)}
			</h1>
			<p className={css.description}>{parser(description)}</p>
			{icon && <img src={icon} alt="Icon" className={css.icon} />}
		</section>
	);
};
