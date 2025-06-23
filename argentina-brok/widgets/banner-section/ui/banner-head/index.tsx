/* eslint-disable @next/next/no-img-element */
'use client';

import cx from 'clsx';
import parser from 'html-react-parser';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/button';
import type { BannerHeadProps } from '@/widgets/banner-section/banner.types';

import css from './index.module.css';

export const BannerHead = ({ type, headData, className }: BannerHeadProps) => {
	const router = useRouter();
	const t = useTranslations('backButton');

	const handleClick = () => {
		router.back();
	};

	return (
		<article className={cx(css.root, className, css[type])}>
			{type === 'profix' && (
				<Button variant="back" onClick={handleClick} className={css.backButton}>
					{parser(t('text'))}
				</Button>
			)}
			{type === 'profix' && headData.icon && (
				<img src={headData.icon} loading="lazy" className={css.icon} />
			)}
			{type === 'about' && headData.established && (
				<div className={css.established}>{parser(headData.established)}</div>
			)}
			<div className={cx(css.title, css[type])}>{parser(headData.title)}</div>
			<div className={cx(css.description, css[type])}>
				{parser(headData.description)}
			</div>
		</article>
	);
};
