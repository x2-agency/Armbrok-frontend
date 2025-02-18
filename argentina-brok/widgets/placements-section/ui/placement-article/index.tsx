import parser from 'html-react-parser';

import type { PlacementArticleProps } from '@/widgets/placements-section/placements.types';

import css from './index.module.css';

export const PlacementArticle = ({
	title,
	description,
}: PlacementArticleProps) => {
	return (
		<>
			{title && <h4 className={css.title}>{parser(title)}</h4>}
			{description && (
				<p className={css.description}>{parser(description.toString())}</p>
			)}
		</>
	);
};
