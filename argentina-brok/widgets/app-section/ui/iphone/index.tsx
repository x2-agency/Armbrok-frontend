/* eslint-disable @next/next/no-img-element */
import type { PhoneMockupsType } from '@/view/home/types/response';

import css from './index.module.css';

export const Iphone = ({
	image,
	wrapperClass,
}: {
	image?: PhoneMockupsType;
	wrapperClass: string;
}) => {
	if (!image) return null;

	return (
		<div className={wrapperClass}>
			<img src={image.url} className={css.img} alt="iPhone" />
		</div>
	);
};
