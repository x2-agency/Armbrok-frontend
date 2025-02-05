import cx from 'clsx';

import { Container } from '@/shared/ui/container';
import { FormatImage } from '@/shared/ui/format-image';
import type { BannerProps } from '@/widgets/banner-section/banner.types';

import { BannerBody } from './banner-body';
import { BannerHead } from './banner-head';
import css from './index.module.css';

export const BannerSection = ({ type, banner, alignContent }: BannerProps) => {
	return (
		<section className={cx(css.root, css[type])} data-align={alignContent}>
			<Container className={css.content}>
				{type === 'default' && (
					<>
						<BannerHead
							type={type}
							headData={{
								title: banner.title,
								description: banner.description,
							}}
						/>
						<BannerBody
							type={type}
							bodyData={{
								button: banner.button,
							}}
						/>
					</>
				)}
				{type === 'profix' && (
					<>
						<BannerHead
							type={type}
							headData={{
								title: banner.title,
								description: banner.description,
								icon: banner.icon,
							}}
						/>
						<BannerBody
							type={type}
							bodyData={{
								panel: banner.panel,
							}}
						/>
					</>
				)}
				{type === 'about' && (
					<>
						<BannerHead
							type={type}
							headData={{
								title: banner.title,
								description: banner.description,
								established: banner.established,
							}}
						/>
						<BannerBody
							type={type}
							bodyData={{
								awards: banner.awards,
							}}
						/>
					</>
				)}
			</Container>

			{banner.poster && (
				<FormatImage poster={banner.poster} className={css.poster} />
			)}
		</section>
	);
};
