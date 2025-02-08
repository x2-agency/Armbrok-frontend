import parser from 'html-react-parser';

import css from './index.module.css';

export type MembershipCardProps = {
	icon: string;
	title: string;
	description: string;
};

export const MembershipCard = ({
	icon,
	title,
	description,
}: MembershipCardProps) => {
	return (
		<article className={css.root}>
			<img src={icon} alt={title} className={css.icon} />
			<header className={css.header}>
				<h3 className={css.title}>{parser(title)}</h3>
				<p className={css.description}>{parser(description)}</p>
			</header>
		</article>
	);
};
