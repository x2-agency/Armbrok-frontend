import parser from 'html-react-parser';

import WreathLeftSVG from '@/public/assets/icons/wreath/left.svg';
import WreathRightSVG from '@/public/assets/icons/wreath/right.svg';
import type { Award } from '@/shared/types/global.types';

import css from './index.module.css';

export const AwardItem = ({ description, startYear, endYear }: Award) => {
	return (
		<article className={css.root}>
			<WreathLeftSVG className={css.wreath} />
			<div className={css.content}>
				<h4 className={css.age}>
					{endYear ? `${startYear}-${endYear}` : startYear}
				</h4>
				<p className={css.about}>{parser(description)}</p>
			</div>
			<WreathRightSVG className={css.wreath} />
		</article>
	);
};
