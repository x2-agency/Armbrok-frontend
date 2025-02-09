import parser from 'html-react-parser';

import WreathLeftSVG from '@/public/assets/icons/wreath/left.svg';
import WreathRightSVG from '@/public/assets/icons/wreath/right.svg';
import type { AwardItemProps } from '@/widgets/awards/awards.types';

import css from './index.module.css';

export const AwardItem = ({ about, age }: AwardItemProps) => {
	return (
		<article className={css.root}>
			<WreathLeftSVG className={css.wreath} />
			<div className={css.content}>
				<h4 className={css.age}>{parser(age)}</h4>
				<p className={css.about}>{parser(about)}</p>
			</div>
			<WreathRightSVG className={css.wreath} />
		</article>
	);
};
