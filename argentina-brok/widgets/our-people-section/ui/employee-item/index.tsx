/* eslint-disable @next/next/no-img-element */
import cx from 'clsx';
import parser from 'html-react-parser';

import type { EmployeeStoriesItem } from '@/shared/types/global.types';

import css from './index.module.css';

export const EmployeeItem = ({ story, employee }: EmployeeStoriesItem) => {
	return (
		<article className={cx(css.root, 'p-32')}>
			<header className={css.titleBlock}>
				<div className={css.avatarWrapper}>
					<img
						className={css.avatar}
						src={employee.avatar?.url}
						alt="employee avatar"
					/>
				</div>
				<div className={css.aboutEmployee}>
					<h4 className={css.fullName}>{parser(employee.fullName)}</h4>
					<p className={css.position}>{parser(employee.position)}</p>
				</div>
			</header>
			<p className={css.story}>{parser(story)}</p>
		</article>
	);
};
