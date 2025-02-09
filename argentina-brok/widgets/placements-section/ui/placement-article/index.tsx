import parser from 'html-react-parser';

import type { PlacementArticleProps } from '@/widgets/placements-section/placements.types';

import css from './index.module.css';

export const PlacementArticle = ({
	title,
	description,
}: PlacementArticleProps) => {
	return (
		<>
			<h4 className={css.title}>{parser(title)}</h4>
			<p className={css.description}>{parser(description)}</p>
		</>
	);
};
