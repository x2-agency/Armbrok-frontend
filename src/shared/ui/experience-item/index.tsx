import parser from 'html-react-parser';

import css from './index.module.css';

export type ExperienceItemProps = {
	title?: string;
	description?: string;
};

export const ExperienceItem = ({ title, description }: ExperienceItemProps) => {
	if (!title && !description) {
		return null;
	}

	return (
		<article className={css.root}>
			{title && <h2 className={css.title}>{parser(title)}</h2>}
			{description && <p className={css.description}>{parser(description)}</p>}
		</article>
	);
};
