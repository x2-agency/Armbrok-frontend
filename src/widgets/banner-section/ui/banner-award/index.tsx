import parser from 'html-react-parser';

import type { AwardsData } from '@/widgets/banner-section/banner.types';

import css from './index.module.css';

export const BannerAward = ({ itemIndex, title, description }: AwardsData) => {
	return (
		<article className={css.root}>
			{itemIndex && <h2 className={css.place}>{parser(itemIndex ?? '')}</h2>}
			{title && <h4 className={css.title}>{parser(title ?? '')}</h4>}
			{description && (
				<div className={css.description}>{parser(description ?? '')}</div>
			)}
		</article>
	);
};
