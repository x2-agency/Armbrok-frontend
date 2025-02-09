import cx from 'clsx';

import { Container } from '@/shared/ui/container';
import { FormatImage } from '@/shared/ui/format-image';
import type { BannerProps } from '@/widgets/banner-section/banner.types';
import { defineBodyContent } from '@/widgets/banner-section/helpers/define-body-content';
import { defineHeadContent } from '@/widgets/banner-section/helpers/define-head-content';

import { BannerBody } from './banner-body';
import { BannerHead } from './banner-head';
import css from './index.module.css';

export const BannerSection = (props: BannerProps) => {
	const { type, banner, alignContent } = props;
	const headContent = defineHeadContent(props);
	const bodyContent = defineBodyContent(props);

	return (
		<section className={cx(css.root, css[type])} data-align={alignContent}>
			<Container category="section" padding="default" className={css.content}>
				<BannerHead {...headContent} />
				<BannerBody {...bodyContent} />
			</Container>
			{props.banner.poster && (
				<FormatImage poster={banner.poster} className={css.poster} />
			)}
		</section>
	);
};
