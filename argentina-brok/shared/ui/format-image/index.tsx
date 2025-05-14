import cx from 'clsx';

import type { PosterImageProps } from '@/shared/types/poster';

import css from './index.module.css';

export const FormatImage = ({
	poster,
	className,
	isLazy = true,
}: {
	poster?: PosterImageProps;
	className?: string;
	isLazy?: boolean;
}) => {
	if (!poster) {
		return null;
	}

	return (
		<picture className={cx(css.image, className)}>
			{poster.mobile && (
				<source srcSet={poster.mobile?.url} media="(max-width: 767px)" />
			)}
			{poster.tablet && (
				<source srcSet={poster.tablet?.url} media="(max-width: 1024px)" />
			)}
			{poster.desktop && <source srcSet={poster.desktop?.url} />}
			<img
				src={poster.desktop?.url ?? poster.tablet?.url ?? poster.mobile?.url}
				alt="block"
				loading={isLazy ? 'lazy' : 'eager'}
				draggable="false"
			/>
		</picture>
	);
};
