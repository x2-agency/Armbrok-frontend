import parser from 'html-react-parser';

import type { BannerAwardsData } from '@/widgets/banner-section/banner.types';

import css from './index.module.css';

export const BannerAward = ({
	place,
	title,
	description,
}: BannerAwardsData) => {
	return (
		<article className={css.root}>
			<h2 className={css.place}>{parser(place)}</h2>
			<h4 className={css.title}>{parser(title)}</h4>
			<p className={css.description}>{description}</p>
		</article>
	);
};
