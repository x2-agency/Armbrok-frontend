import parser from 'html-react-parser';

import type { AwardsData } from '@/widgets/banner-section/banner.types';

import css from './index.module.css';

export const BannerAward = ({ place, title, description }: AwardsData) => {
	return (
		<article className={css.root}>
			{place && <h2 className={css.place}>#{place ?? ''}</h2>}
			{title && <h4 className={css.title}>{parser(title ?? '')}</h4>}
			{description && (
				<div className={css.description}>{parser(description ?? '')}</div>
			)}
		</article>
	);
};
