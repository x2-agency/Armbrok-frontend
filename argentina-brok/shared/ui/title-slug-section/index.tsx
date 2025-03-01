import parser from 'html-react-parser';

import css from './index.module.css';

export type TitleSlugSectionProps = {
	title?: string;
	description?: string;
};

export const TitleSlugSection = ({
	title,
	description,
}: TitleSlugSectionProps) => {
	return (
		<div className={css.root}>
			<h1 className={css.title}>{parser(title ?? '')}</h1>
			<p className={css.description}>{parser(description ?? '')}</p>
		</div>
	);
};
