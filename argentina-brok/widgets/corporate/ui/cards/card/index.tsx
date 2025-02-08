/* eslint-disable @next/next/no-img-element */
import parser from 'html-react-parser';

import css from './index.module.css';
export const Card = ({
	icon,
	description,
}: {
	icon: string;
	description: string;
}) => {
	return (
		<article className={css.root}>
			<img className={css.icon} src={icon} alt="icon docs" />
			<p className={css.description}>{parser(description)}</p>
		</article>
	);
};
