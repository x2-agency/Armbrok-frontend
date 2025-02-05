'use client';

/* eslint-disable @next/next/no-img-element */
import cx from 'clsx';
import parser from 'html-react-parser';
import { useRouter } from 'next/navigation';

import { Button } from '@/shared/ui/button';
import type { BannerHeadProps } from '@/widgets/banner-section/banner.types';

import css from './index.module.css';

export const BannerHead = ({ type, headData, className }: BannerHeadProps) => {
	const router = useRouter();

	const handleClick = () => {
		router.back();
	};

	return (
		<section className={cx(css.root, className, css[type])}>
			{type === 'profix' && (
				<Button variant="back" onClick={handleClick} className={css.backButton}>
					Back
				</Button>
			)}
			{type === 'about' && (
				<div className={css.established}>{parser(headData.established)}</div>
			)}
			<h1 className={cx(css.title, css[type])}>{parser(headData.title)}</h1>
			<p className={cx(css.description, css[type])}>
				{parser(headData.description)}
			</p>
			{type === 'profix' && headData.icon && (
				<img src={headData.icon} alt="Icon" className={css.icon} />
			)}
		</section>
	);
};
