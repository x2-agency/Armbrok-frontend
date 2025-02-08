import parser from 'html-react-parser';

import type { MemberProps } from '@/widgets/company-members/company-members.types';

import css from './index.module.css';

export const Member = ({ name, image, position }: MemberProps) => {
	return (
		<article className={css.root}>
			<img src={image} alt={name} className={css.image} />
			<header>
				<h3 className={css.name}>{parser(name)}</h3>
				<p className={css.position}>{parser(position)}</p>
			</header>
		</article>
	);
};
