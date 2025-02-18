/* eslint-disable @next/next/no-img-element */
import parser from 'html-react-parser';

import type { EmployeeStoriesItem } from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';

export const EmployeeItem = ({ story, employee }: EmployeeStoriesItem) => {
	return (
		<Container category="article" padding="p-32" className={css.root}>
			<div className={css.titleBlock}>
				<img
					className={css.avatar}
					src={employee.avatar?.url}
					alt="employee avatar"
				/>
				<div className={css.aboutEmployee}>
					<h4 className={css.fullName}>{parser(employee.fullName)}</h4>
					<p className={css.position}>{parser(employee.position)}</p>
				</div>
			</div>
			<p className={css.story}>{parser(story)}</p>
		</Container>
	);
};
