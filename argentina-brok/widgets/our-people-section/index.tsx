'use client';

import parser from 'html-react-parser';

import type { EmployeeStorySection } from '@/shared/types/global.types';

import css from './index.module.css';
import { EmployeeItem } from './ui/employee-item';

export const OurPeopleSection = ({
	title,
	description,
	employeeStories,
}: EmployeeStorySection) => {
	if (!employeeStories || employeeStories.length === 0) {
		return null;
	}

	return (
		<section className={css.root}>
			<div className={css.titleBlock}>
				{title && <h2 className={css.title}>{parser(title)}</h2>}
				{description && (
					<p className={css.description}>{parser(description)}</p>
				)}
			</div>
			<ul className={css.employees} dir="ltr">
				{employeeStories.map((value, index) => (
					<li key={index} className={css.listElement}>
						<EmployeeItem employee={value.employee} story={value.story} />
					</li>
				))}
			</ul>
		</section>
	);
};
