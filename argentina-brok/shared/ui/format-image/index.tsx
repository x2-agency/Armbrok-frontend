import cx from 'clsx';

import type { MediaData } from '@/shared/types/global.types';

import css from './index.module.css';

export const FormatImage = ({
	poster,
	className,
}: {
	poster?: MediaData;
	className?: string;
}) => {
	if (!poster) {
		return null;
	}

	return (
		<picture className={cx(css.image, className)}>
			<source srcSet={poster.formats?.small?.url} media="(max-width: 767px)" />
			<source
				srcSet={poster.formats?.medium?.url}
				media="(max-width: 1024px)"
			/>
			<source srcSet={poster.formats?.large?.url} />
			<img
				src={poster.formats?.medium?.url}
				alt="block"
				loading="lazy"
				draggable="false"
			/>
		</picture>
	);
};
