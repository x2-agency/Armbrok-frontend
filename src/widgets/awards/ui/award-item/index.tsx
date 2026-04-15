import cx from 'clsx';
import parser from 'html-react-parser';

import CupSVG from '@/public/assets/icon/cup.svg';
import type { Award } from '@/shared/types/global.types';

import css from './index.module.css';

export const AwardItem = ({ description, startYear, endYear }: Award) => {
	return (
		<article className={css.root}>
			<div className={css.content}>
				<CupSVG className={css.cup} />

				<h4 className={css.age}>
					{endYear ? `${startYear}-${endYear}` : startYear}
				</h4>
				<p className={css.about}>{parser(cx(description))}</p>
			</div>
		</article>
	);
};
