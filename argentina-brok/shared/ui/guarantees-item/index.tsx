/* eslint-disable @next/next/no-img-element */
import parser from 'html-react-parser';

import css from './index.module.css';

export type GuaranteesItemProps = {
	icon: string;
	title?: string;
	description?: string;
};

export const GuaranteesItem = ({
	icon,
	title,
	description,
}: GuaranteesItemProps) => {
	return (
		<article className={css.article}>
			{icon && <img src={icon} alt="icon" className={css.icon} />}
			{title && <h3 className={css.title}>{parser(title)}</h3>}
			{description && <p className={css.description}>{parser(description)}</p>}
		</article>
	);
};
