/* eslint-disable @next/next/no-img-element */
import parser from 'html-react-parser';

import css from './index.module.css';

export type GuaranteesItemProps = {
	icon: string;
	title: string;
};

export const GuaranteesItem = ({ icon, title }: GuaranteesItemProps) => {
	return (
		<article className={css.article}>
			<img src={icon} alt="icon" className={css.icon} />
			<h3 className={css.title}>{parser(title)}</h3>
		</article>
	);
};
