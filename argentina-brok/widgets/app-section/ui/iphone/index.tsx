/* eslint-disable @next/next/no-img-element */
import css from './index.module.css';

export type ImageData = { src: string; alt: string };

export const Iphone = ({
	image,
	wrapperClass,
}: {
	image?: ImageData;
	wrapperClass: string;
}) => {
	if (!image) return null;

	return (
		<div className={wrapperClass}>
			<img src={image.src} className={css.img} alt={image.alt} />
		</div>
	);
};
