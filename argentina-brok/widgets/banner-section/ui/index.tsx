import cx from 'clsx';

import type { BannerProps } from '@/widgets/banner-section/banner.types';

import { BannerBody } from './banner-body';
import { BannerHead } from './banner-head';
import css from './index.module.css';
import { FormatImage } from '@/shared/ui/format-image';
import { Container } from '@/shared/ui/container';

export const BannerSection = ({
	alignContent = 'center',
	size = 'medium',
	banner,
}: BannerProps) => {
	return (
		<section className={cx(css.root, css[size])} data-align={alignContent}>
			<Container className={css.content}>
				<BannerHead
					title={banner.title}
					description={banner.description}
					withBackButton
				/>
				<BannerBody
					awards={banner.awards}
					panel={banner.panel}
					button={banner.button}
				/>
			</Container>

			{banner.poster && (
				<FormatImage poster={banner.poster} className={css.poster} />
			)}
		</section>
	);
};
