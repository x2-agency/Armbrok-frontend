import cx from 'clsx';

import type { BannerProps } from '@/widgets/banner/banner.types';

import { BannerBody } from './banner-body';
import { BannerHead } from './banner-head';
import css from './index.module.css';
import { Container } from '@/shared/ui/container';
import { FormatImage } from '@/shared/ui/format-image';

export const Banner = ({
	alignContent = 'center',
	size = 'medium',
	banner,
}: BannerProps) => {
	return (
		<section className={cx(css.root, css[size])} data-align={alignContent}>
			<BannerHead title={banner.title} description={banner.description} />
			<BannerBody
				awards={banner.awards}
				panel={banner.panel}
				button={banner.button}
			/>
			{banner.poster && (
				<FormatImage poster={banner.poster} className={css.poster} />
			)}
		</section>
	);
};
