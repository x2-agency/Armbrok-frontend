/* eslint-disable @next/next/no-img-element */
import type { ImageFormat } from '@/shared/types/global.types';

import css from './index.module.css';

export const Iphone = ({
	image,
	wrapperClass,
}: {
	image?: ImageFormat;
	wrapperClass: string;
}) => {
	if (!image) return null;

	return (
		<div className={wrapperClass}>
			<img src={image.url} className={css.img} alt="iPhone" />
		</div>
	);
};
