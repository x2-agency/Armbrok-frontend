'use client';

import cx from 'clsx';
import { forwardRef } from 'react';

import { headerScrollObserver } from '@/shared/lib/header-scroll-observer';
import { FormatImage } from '@/shared/ui/format-image';
import type { BannerProps } from '@/widgets/banner-section/banner.types';
import { defineBodyContent } from '@/widgets/banner-section/helpers/define-body-content';
import { defineHeadContent } from '@/widgets/banner-section/helpers/define-head-content';

import { BannerBody } from './banner-body';
import { BannerHead } from './banner-head';
import css from './index.module.css';

export const BannerSection = forwardRef((props: BannerProps) => {
	const { type, banner, alignContent } = props;
	const headContent = defineHeadContent(props);
	const bodyContent = defineBodyContent(props);
	const { ref } = headerScrollObserver.useObserve('white');

	return (
		<section
			className={cx(css.root, css[type])}
			data-align={alignContent}
			ref={ref}
		>
			<div className={cx(css.content, 'default')}>
				<BannerHead {...headContent} className={css.head} />
				<BannerBody {...bodyContent} />
			</div>
			{props.banner.poster && (
				<FormatImage poster={banner.poster} className={css.poster} />
			)}
		</section>
	);
});
