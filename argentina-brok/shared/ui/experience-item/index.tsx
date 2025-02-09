import parser from 'html-react-parser';

import css from './index.module.css';

export type ExperienceItemProps = {
	title: string;
	description: string;
};

export const ExperienceItem = ({ title, description }: ExperienceItemProps) => {
	return (
		<article className={css.root}>
			<h2 className={css.title}>{parser(title)}</h2>
			<p className={css.description}>{parser(description)}</p>
		</article>
	);
};
